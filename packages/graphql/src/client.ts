import type { Readable } from 'svelte/store'
import { writable, derived } from 'svelte/store'
import { setContext, getContext } from 'svelte'

import type {
  GraphQLVariables,
  GraphQLRequestOptions,
  GraphQLServerResult,
  GraphQLError,
  GraphQLClientError,
  GraphQLRequest,
  GraphQLResponse,
  GraphQLExtensions,
  GraphQLClient,
  GraphQLExchange,
  GraphQLNetworkError,
} from './types'
import { getOperation } from './internal/get-operation'
import { fetch, defaultExchanges } from './exchanges'

/* eslint-disable @typescript-eslint/no-explicit-any */

class ClientError extends Error implements GraphQLClientError {
  readonly name: GraphQLClientError['name']
  readonly errors: ReadonlyArray<GraphQLError>
  readonly extensions?: GraphQLExtensions

  constructor(errors: GraphQLError[], extensions?: GraphQLExtensions) {
    super(errors?.[0]?.message || `GraphQL Error`)
    this.name = 'GraphQLClientError'
    this.errors = errors
    this.extensions = extensions
  }
}

const fromServerResult = <T>({
  fetching,
  error,
  data,
  errors,
  extensions,
}: StoreData<T>): GraphQLResponse<T> => ({
  fetching: Boolean(fetching),
  data,
  error: error || (errors && new ClientError(errors, extensions)),
  extensions,
})

interface StoreData<T> extends GraphQLServerResult<T> {
  readonly fetching?: boolean
  readonly error?: GraphQLNetworkError
}

export interface GraphQLClientOptions extends GraphQLRequestOptions {
  /** Defaults to the default exchanges */
  readonly exchanges?: (null | undefined | false | GraphQLExchange)[]
}

export class Client implements GraphQLClient {
  private lastId = 0
  private exchanges: GraphQLExchange[]
  private options: GraphQLRequestOptions

  constructor({ exchanges = defaultExchanges, ...options }: GraphQLClientOptions) {
    this.exchanges = exchanges.filter(Boolean) as GraphQLExchange[]
    this.exchanges.push(fetch())
    this.options = options
  }

  request<T = any, V extends GraphQLVariables = GraphQLVariables>(
    query: string,
    variables?: V,
    options: GraphQLRequestOptions = {},
  ): Readable<GraphQLResponse<T>> {
    const store = writable<StoreData<T>>({}, (set) => {
      const controller = new AbortController()

      set({ fetching: true })

      const callExchange = (
        request: GraphQLRequest,
        index: number,
      ): Promise<GraphQLServerResult> => {
        const exchange = this.exchanges[index]

        if (exchange) {
          return exchange(
            request,
            (nextRequest = request) => callExchange(nextRequest, index + 1),
            store.update,
          )
        }

        // Terminator
        throw new Error(
          `No exchange has handled operations of type "${request.operation.type}". Check whether you've added an exchange responsible for these operations.`,
        )
      }

      // eslint-disable-next-line promise/catch-or-return, @typescript-eslint/no-floating-promises
      callExchange(
        {
          query,
          variables: (variables || {}) as NonNullable<GraphQLVariables>,
          operation: {
            ...getOperation(query),
            id: ++this.lastId,
          },
          extensions: {},
          options: {
            ...this.options,
            ...options,
            headers: { ...this.options.headers, ...options.headers },
            signal: controller.signal,
          },
        },
        0,
      )
        .catch((error: Error) => ({ error }))
        .then((result) => store.set({ ...result, fetching: false }))

      return () => controller.abort()
    })

    return derived(store, fromServerResult)
  }
}

const CLIENT_CONTEXT_KEY = Symbol.for('@sveltik/graphql/client')

export const initGraphQLClient = (options: GraphQLClientOptions): GraphQLClient => {
  const client = new Client(options)
  setContext(CLIENT_CONTEXT_KEY, client)
  return client
}

export const useGraphQLClient = (): GraphQLClient => getContext(CLIENT_CONTEXT_KEY) as GraphQLClient

/* eslint-enable @typescript-eslint/no-explicit-any */
