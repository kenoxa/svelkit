import type {
  FalsyValue,
  GraphQLExchange,
  GraphQLServerResult,
  GraphQLFetchError,
} from '@svelkit/graphql'

export interface AutomaticPersistedQuery extends Record<string, string | number> {
  version: number
}

declare global {
  interface WindowOrWorkerGlobalScope {
    readonly msCrypto?: Crypto
    readonly msrCrypto?: Crypto
  }

  interface Crypto {
    readonly webkitSubtle?: SubtleCrypto
  }
}

// eslint-disable-next-line no-restricted-globals
const crypto = self.crypto /* Native */ || self.msCrypto /* IE11 */ || self.msrCrypto /* Polyfill */

const cryptoSubtle = crypto && (crypto.subtle || crypto.webkitSubtle)

const sha256Hash: AutomaticPersistedQueryOptions['generateHash'] =
  cryptoSubtle &&
  (async (query) => ({
    version: 1,
    // 1. Encode as UTF-8
    // 2. Hash the message
    // 3. Convert ArrayBuffer to hex string
    sha256Hash: toHex(await cryptoSubtle.digest('SHA-256', textEncode(query))),
  }))

export type GenerateHash = (query: string) => Promise<AutomaticPersistedQuery>

export interface AutomaticPersistedQueryOptions {
  generateHash?: FalsyValue | GenerateHash
  preferGETForHashedQueries?: boolean
  notFoundError?: string
  notSupportedError?: string
}

/**
 * An exchange to automaticly persist queries.
 *
 * see
 * - https://github.com/apollographql/apollo-link-persisted-queries
 * - https://www.apollographql.com/docs/apollo-server/performance/apq
 */
export function automaticPersistedQueriesExchange({
  generateHash = sha256Hash,
  preferGETForHashedQueries = true,
  notFoundError = 'PersistedQueryNotFound',
  notSupportedError = 'PersistedQueryNotSupported',
}: AutomaticPersistedQueryOptions = {}): GraphQLExchange {
  if (typeof generateHash !== 'function') {
    return (request, next) => next()
  }

  const cache = new Map<string, Promise<AutomaticPersistedQuery>>()

  const cachedPersistedQuery = (gql: string): Promise<AutomaticPersistedQuery> => {
    let hashed = cache.get(gql)

    if (!hashed) {
      cache.set(gql, (hashed = generateHash(gql)))
    }

    return hashed
  }

  let supportsPersistedQueries = true

  return async ({ query, extensions, options, ...request }, next) => {
    if (
      !supportsPersistedQueries ||
      !query ||
      request.persisted ||
      extensions.persistedQuery ||
      request.operation.type !== 'query'
    ) {
      return next()
    }

    const persistedQuery = await cachedPersistedQuery(query)

    const result = await next({
      ...request,
      query: '',
      extensions: { ...extensions, persistedQuery },
      options: {
        ...options,
        preferGetForQueries: preferGETForHashedQueries || options.preferGetForQueries,
      },
    }).catch(
      (error: GraphQLFetchError): GraphQLServerResult => {
        if (error.message === notFoundError || error.message === notSupportedError) {
          return { errors: [error] }
        }

        throw error
      },
    )

    if (result.errors) {
      // If the server doesn't support persisted queries, don't try anymore
      supportsPersistedQueries = result.errors.every((error) => error.message !== notSupportedError)

      // If it's not found, we can try it again including the query, otherwise just report the error
      if (
        !supportsPersistedQueries ||
        result.errors.some((error) => error.message === notFoundError)
      ) {
        return next({ ...request, query, extensions, options })
      }
    }

    return result
  }
}

function textEncode(string: string): Uint8Array {
  if (typeof TextEncoder !== 'undefined') {
    return new TextEncoder().encode(string)
  }

  const utf8 = unescape(encodeURIComponent(string))
  const result = new Uint8Array(utf8.length)

  let i = utf8.length
  while (i--) {
    result[i] = utf8.charCodeAt(i)
  }

  return result
}

function toHex(buffer: ArrayBuffer): string {
  let result = ''
  const view = new DataView(buffer)

  for (let i = 0; i < view.byteLength; i += 4) {
    result += ('00000000' + view.getUint32(i).toString(16)).slice(-8)
  }

  return result
}
