import type { Response } from '../types.dom'
import type { GraphQLExchange, GraphQLRequestOptions } from '../types'
import stableStringify from 'fast-json-stable-stringify'

export class GraphQLFetchError extends Error {
  readonly url: string
  readonly request: GraphQLRequestOptions
  readonly response: Response

  constructor(url: string, request: GraphQLRequestOptions, response: Response, message?: string) {
    super(`fetch failed (code: ${response.status}): ${message || response.statusText}`)
    this.name = 'GraphQLFetchError'
    this.url = url
    this.request = request
    this.response = response
  }
}

const emptyToUndefined = <T extends Record<string, unknown>>(object: undefined | T): undefined | T =>
  object && Object.keys(object).length > 0 ? object : undefined

const MAX_URL_LENGTH = 2000

/**
 * A default exchange for fetching GraphQL requests.
 */
const fetchExchange = (config: GraphQLRequestOptions = {}): GraphQLExchange => async (
  { operation, query, variables, extensions, options },
  next,
) => {
  if (operation.type === 'query' || operation.type === 'mutation') {
    const { fetch = globalThis.fetch, uri = '/graphql', preferGetForQueries, ...init } = {
      referrerPolicy: 'strict-origin-when-cross-origin' as ReferrerPolicy,
      ...config,
      ...options,
      headers: {
        ...config.headers,
        ...options.headers,
      },
    }

    let response: Response | undefined

    const args = {
      operationName: operation.name,
      query: query || undefined,
      variables: emptyToUndefined(variables),
      extensions: emptyToUndefined(extensions),
    }

    if (preferGetForQueries && operation.type === 'query') {
      const url = new URL(uri, document.baseURI)

      // Add all defined args as search parameters
      for (const [key, value] of Object.entries(args)) {
        if (value) {
          url.searchParams.set(key, typeof value === 'string' ? value : stableStringify(value))
        }
      }

      if (url.href.length < MAX_URL_LENGTH) {
        response = await fetch(url.href, { ...init, method: 'GET' })
      }
    }

    if (!response) {
      response = await fetch(new URL(uri, document.baseURI).href, {
        ...init,
        method: 'POST',
        headers: {
          ...init.headers,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(args),
      })
    }

    if (response.ok && response.headers.get('Content-Type')?.startsWith('application/json')) {
      return response.json()
    }

    throw new GraphQLFetchError(uri, init, response, await response.text())
  }

  return next()
}

export { fetchExchange as fetch }
