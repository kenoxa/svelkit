import type { Response, Headers } from '../types.dom'
import type { GraphQLExchange, GraphQLRequestOptions, GraphQLServerResult } from '../types'
import stableStringify from 'fast-json-stable-stringify'
import { isString } from '../internal/is'
import { baseURI } from '../internal/base-uri'

export class GraphQLFetchError extends Error {
  readonly status: number
  readonly body: string | GraphQLServerResult
  readonly headers: Headers

  constructor(response: Response, body: string | GraphQLServerResult) {
    super(
      (isString(body) ? body : (body.errors || [])[0]?.message) ||
        `[${response.status}] ${response.statusText}`,
    )
    this.name = 'GraphQLFetchError'
    this.status = response.status
    this.body = body
    this.headers = response.headers
  }
}

const emptyToUndefined = <T extends Record<string, unknown>>(
  object: undefined | T,
): undefined | T => (object && Object.keys(object).length > 0 ? object : undefined)

const falsyToUndefined = <T>(value: T): undefined | T => value || undefined

const MAX_URL_LENGTH = 2000

const isJsonResponse = (response: Response): boolean | undefined =>
  response.headers.get('content-type')?.startsWith('application/json')

/**
 * A default exchange for fetching GraphQL requests.
 */
export function fetchExchange(config: GraphQLRequestOptions = {}): GraphQLExchange {
  return async ({ operation, query, variables, extensions, persisted, options }, next) => {
    if (operation.type === 'subscription') {
      return next()
    }

    // eslint-disable-next-line no-restricted-globals
    const { fetch = self.fetch, uri, preferGetForQueries, ...init } = {
      referrerPolicy: 'strict-origin-when-cross-origin' as ReferrerPolicy,
      ...config,
      ...options,
      headers: {
        accept: 'application/json',
        ...config.headers,
        ...options.headers,
      },
    }

    let response: Response | undefined

    const args = {
      operationName: falsyToUndefined(operation.name),
      query: falsyToUndefined(query),
      variables: emptyToUndefined(variables),
      persisted: falsyToUndefined(persisted),
      extensions: emptyToUndefined(extensions),
    } as const

    if (preferGetForQueries && operation.type === 'query') {
      const url = new URL(uri, baseURI())

      // Add all defined args as search parameters
      Object.keys(args).forEach(key => {
        const value = args[key as keyof typeof args]

        if (value !== undefined) {
          url.searchParams.set(key, isString(value) ? value : stableStringify(value))
        }
      })

      if (url.href.length < MAX_URL_LENGTH) {
        response = await fetch(url.href, { ...init, method: 'GET' })
      }
    }

    if (!response) {
      response = await fetch(new URL(uri, baseURI()).href, {
        ...init,
        method: 'POST',
        headers: {
          ...init.headers,
          // TODO application/graphql
          'content-type': 'application/json',
        },
        body: JSON.stringify(args),
      })
    }

    if (response.ok && isJsonResponse(response)) {
      return response.json()
    }

    throw new GraphQLFetchError(
      response,
      await (isJsonResponse(response) ? response.json() : response.text()),
    )
  }
}
