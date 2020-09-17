import type { GraphQLExchange, GraphQLServerResult } from '../types'
import type { GraphQLFetchError } from './fetch'

import { fnv1a128 } from '../internal/fnv1a'

export interface AutomaticPersistedQuery extends Record<string, string | number> {
  version: number
}

export { fnv1a128 }

const defaultHash: AutomaticPersistedQueryOptions['generateHash'] = (query) => ({
  version: -1,
  fnv1a128Hash: fnv1a128(query),
})

export interface AutomaticPersistedQueryOptions {
  generateHash?: (query: string) => AutomaticPersistedQuery
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
const automaticPersistedQueriesExchange = ({
  generateHash = defaultHash,
  preferGETForHashedQueries = true,
  notFoundError = 'PersistedQueryNotFound',
  notSupportedError = 'PersistedQueryNotSupported',
}: AutomaticPersistedQueryOptions = {}): GraphQLExchange => {
  const cache = new Map<string, AutomaticPersistedQuery>()

  const cachedPersistedQuery = (gql: string): AutomaticPersistedQuery => {
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
      extensions.persistedQuery ||
      request.operation.type !== 'query'
    ) {
      return next()
    }

    const persistedQuery = cachedPersistedQuery(query)

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

export { automaticPersistedQueriesExchange as automaticPersistedQueries }
