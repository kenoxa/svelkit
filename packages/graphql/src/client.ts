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
  GraphQLExchangeOptions,
  GraphQLExchangeUpdate,
  GraphQLNetworkError,
} from './types'
import { getOperation } from './internal/get-operation'
import { fetchExchange } from './exchanges'
import { baseURI } from './internal/base-uri'

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

interface StoreData<Data> extends GraphQLServerResult<Data> {
  readonly fetching?: boolean
  readonly error?: GraphQLNetworkError
}

export interface GraphQLClientOptions extends GraphQLRequestOptions {
  /** Defaults to the default exchanges */
  readonly exchanges?: (null | undefined | false | GraphQLExchange)[]
}

const callExchange = async (
  exchanges: GraphQLExchange[],
  index: number,
  request: GraphQLRequest,
  update: GraphQLExchangeUpdate,
): Promise<GraphQLServerResult> => {
  if (request.options.signal.aborted) {
    throw new Error('aborted')
  }

  if (index === exchanges.length) {
    // Terminator
    throw new Error(
      `No exchange has handled operations of type "${request.operation.type}". Check whether you've added an exchange responsible for these operations.`,
    )
  }

  return exchanges[index](
    request,
    (nextRequest = request, nextUpdate = update) =>
      callExchange(exchanges, index + 1, nextRequest, nextUpdate),
    update,
  )
}

class Client implements GraphQLClient {
  private lastId = 0
  private exchanges: GraphQLExchange[]
  private options: GraphQLRequestOptions

  constructor({ exchanges = [], ...options }: GraphQLClientOptions) {
    this.exchanges = exchanges.filter(Boolean) as GraphQLExchange[]
    this.exchanges.push(fetchExchange())
    this.options = options
  }

  setHeader(name: string, value: string | false | null | undefined): string | undefined {
    const headers = { ...this.options.headers, [name]: value || '' }

    if (!value) delete headers[name]

    this.options = { ...this.options, headers }

    return headers[name]
  }

  request<Data = any, V extends GraphQLVariables = GraphQLVariables>(
    query: string,
    variables: V,
    requestOptions: GraphQLRequestOptions = {},
  ): Readable<GraphQLResponse<Data>> {
    let controller: AbortController | undefined

    const signal = requestOptions.signal || (controller = new AbortController()).signal

    const options: GraphQLExchangeOptions = {
      ...this.options,
      ...requestOptions,
      uri: new URL(requestOptions.uri || this.options.uri || './graphql', baseURI()).href,
      headers: { ...this.options.headers, ...requestOptions.headers },
      signal,
    }

    const operation = {
      ...getOperation(query, options.operationName),
      id: ++this.lastId,
    }

    const store = writable<StoreData<Data>>({}, (set) => {
      set({ fetching: true })

      // eslint-disable-next-line promise/catch-or-return, @typescript-eslint/no-floating-promises
      callExchange(
        this.exchanges,
        0,
        {
          query,
          variables,
          options,
          operation,
          extensions: {},
        },
        store.update,
      )
        .catch((error: Error) => ({ error }))
        .then((result) => set({ ...result, fetching: false }))

      return () => controller?.abort()
    })

    return derived(store, ({ fetching, error, data, errors, extensions }) => ({
      operation,
      fetching: Boolean(fetching),
      data,
      error: error || (errors && new ClientError(errors, extensions)),
      extensions,
    }))
  }
}

const CLIENT_CONTEXT_KEY = Symbol.for('@svelkit/graphql/client')

export const createGraphQLClient = (options: GraphQLClientOptions = {}): GraphQLClient =>
  new Client(options)

const failWithNoClientError = (): never => {
  throw new Error(`No GraphQL client found.`)
}

export const initGraphQLClient = (options?: GraphQLClientOptions | undefined): GraphQLClient => {
  const client = createGraphQLClient(options)
  setContext(CLIENT_CONTEXT_KEY, client)
  return client
}

export const useGraphQLClient = (): GraphQLClient => {
  return getContext(CLIENT_CONTEXT_KEY) || failWithNoClientError()
}

/* eslint-enable @typescript-eslint/no-explicit-any */
