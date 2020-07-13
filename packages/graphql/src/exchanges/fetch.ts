import type { Response } from '../types.dom'
import type { GraphQLExchange, GraphQLRequestOptions } from '../types'

export class GraphQLFetchError extends Error {
  readonly url: string
  readonly request: GraphQLRequestOptions
  readonly response: Response

  constructor(
    url: string,
    request: GraphQLRequestOptions,
    response: Response,
    message: string = response.statusText,
  ) {
    super(`fetch failed (code: ${response.status}): ${message}`)
    this.name = 'GraphQLFetchError'
    this.url = url
    this.request = request
    this.response = response
  }
}

/** A default exchange for fetching GraphQL requests. */
const fetchExchange = (url: string, options: GraphQLRequestOptions = {}): GraphQLExchange => (
  request,
  next,
) => {
  if (request.operation.type === 'query' || request.operation.type === 'mutation') {
    const init = {
      ...options,
      ...request.options,
      headers: {
        ...options.headers,
        ...request.options.headers,
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ query: request.query, variables: request.variables }),
    }

    return fetch(url, init).then(async (response) => {
      if (response.ok && response.headers.get('Content-Type')?.startsWith('application/json')) {
        return response.json()
      }

      throw new GraphQLFetchError(url, init, response, await response.text())
    })
  }

  return next()
}

export { fetchExchange as fetch }
