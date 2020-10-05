import type { Readable } from 'svelte/store'
import type {
  // Fetch,
  AbortSignal,
  RequestCache,
  RequestCredentials,
  RequestMode,
  ReferrerPolicy,
} from './types.dom'

/**
 * This is required for snowpack to include this file in the output.
 */
const MAKE_SNOWPACK_HAPPY = undefined // eslint-disable-line @typescript-eslint/no-unused-vars

/* eslint-disable @typescript-eslint/no-explicit-any */
export type GraphQLExtensions = Record<string, any>
export type GraphQLVariables = undefined | Record<string, any>

/**
 * Represents a location in a Source.
 */
export interface GraphQLSourceLocation {
  readonly line: number
  readonly column: number
}

/**
 * A GraphQLError describes an Error found during the parse, validate, or
 * execute phases of performing a GraphQL operation. In addition to a message
 * and stack trace, it also includes information about the locations in a
 * GraphQL document and/or execution result that correspond to the Error.
 */
export interface GraphQLError {
  /**
   * A message describing the Error for debugging purposes.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   *
   * Note: should be treated as readonly, despite invariant usage.
   */
  readonly message: string

  /**
   * An array of `{ line, column }` locations within the source GraphQL document
   * which correspond to this error.
   *
   * Errors during validation often contain multiple locations, for example to
   * point out two things with the same name. Errors during execution include a
   * single location, the field which produced the error.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */
  readonly locations?: ReadonlyArray<GraphQLSourceLocation>

  /**
   * An array describing the JSON-path into the execution response which
   * corresponds to this error. Only included for errors during execution.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */
  readonly path?: ReadonlyArray<string | number>

  /**
   * Extension fields to add to the formatted error.
   */
  readonly extensions?: GraphQLExtensions
}

export interface GraphQLClientError extends Error {
  readonly name: 'GraphQLClientError'
  message: string
  readonly errors: ReadonlyArray<GraphQLError>
  readonly extensions?: GraphQLExtensions
}

export interface GraphQLNetworkError extends Error {
  message: string
}

/** Resulting data from a [request]{@link GraphQLRequest}. */
export interface GraphQLResponse<T = any> {
  /** Determines if the query is in flight. */
  readonly fetching: boolean

  /** The data returned from the Graphql server. */
  readonly data?: T

  /** Any errors resulting from the operation. */
  readonly error?: GraphQLClientError | GraphQLNetworkError

  /** Optional extensions return by the Graphql server. */
  readonly extensions?: GraphQLExtensions
}

export interface GraphQLStore<T = any, V extends GraphQLVariables = GraphQLVariables>
  extends Readable<GraphQLResponse<T>>,
    PromiseLike<GraphQLResponse<T>> {
  fetch(variables?: Partial<V> | undefined, options?: GraphQLRequestOptions): GraphQLStore<T, V>
}

export interface GraphQLExecutor<T = any, V extends GraphQLVariables = GraphQLVariables>
  extends GraphQLStore<T, V> {
  (variables?: Partial<V> | undefined, options?: GraphQLRequestOptions): GraphQLStore<T, V>
}

export interface GraphQLRequestOptions extends Record<string, any> {
  /**
   * The URI key is a string endpoint or function resolving to an endpoint -- will default to "/graphql" if not specified
   */
  readonly uri?: string

  readonly signal?: AbortSignal

  /**
   * Determines which operation should be executed.
   */
  readonly operationName?: string

  /**
   * If you are running on react-native, or modern browsers, this should be no problem.
   * If you are targeting an environment without fetch such as older browsers or the server,
   * you will need to pass your own fetch to the link through the options.
   *
   * We recommend [unfetch](https://github.com/developit/unfetch) for older browsers
   * and [node-fetch](https://github.com/bitinn/node-fetch) for running in Node.
   */
  readonly fetch?: typeof fetch

  /**
   * Set to `true` to prefer the HTTP GET method for queries (but not for mutations).
   */
  readonly preferGetForQueries?: boolean

  /**
   * Returns the cache mode associated with request, which is a string indicating how the request will interact with the browser's cache when fetching.
   */
  readonly cache?: RequestCache

  /**
   * Returns the credentials mode associated with request, which is a string indicating whether credentials will be sent with the request always, never, or only when sent to a same-origin URL.
   */
  readonly credentials?: RequestCredentials

  /**
   * Returns a Headers object consisting of the headers associated with request. Note that headers added in the network layer by the user agent will not be accounted for in this object, e.g., the "Host" header.
   */
  readonly headers?: Record<string, string>

  /**
   * Returns the mode associated with request, which is a string indicating whether the request will use CORS, or will be restricted to same-origin URLs.
   */
  readonly mode?: RequestMode

  /**
   * Returns the referrer of request. Its value can be a same-origin URL if explicitly set in init, the empty string to indicate no referrer, and "about:client" when defaulting to the global's default. This is used during fetching to determine the value of the `Referer` header of the request being made.
   */
  readonly referrer?: string

  /**
   * Returns the referrer policy associated with request. This is used during fetching to compute the value of the request's referrer.
   */
  readonly referrerPolicy?: ReferrerPolicy
}

export interface GraphQLClient {
  setHeader(name: string, value: string | false | null | undefined): string | undefined

  request<T = any, V extends GraphQLVariables = GraphQLVariables>(
    gql: string,
    variables: V,
    options?: GraphQLRequestOptions,
  ): Readable<GraphQLResponse<T>>
}

export interface GraphQLServerResult<T = any> {
  data?: T
  errors?: GraphQLError[]
  extensions?: GraphQLExtensions
}

export interface GraphQLExchangeOptions extends GraphQLRequestOptions {
  readonly signal: AbortSignal

  /**
   * Returns a Headers object consisting of the headers associated with request. Note that headers added in the network layer by the user agent will not be accounted for in this object, e.g., the "Host" header.
   */
  readonly headers: Record<string, string>
}

/** http://spec.graphql.org/draft/#sec-Language.Operations */
export type GraphQLOperationType = 'query' | 'mutation' | 'subscription'

export interface GraphQLOperation {
  readonly id: number
  readonly type: GraphQLOperationType
  readonly name: string | undefined
}

export interface GraphQLRequest<V extends GraphQLVariables = GraphQLVariables> {
  readonly operation: GraphQLOperation
  readonly query: string
  readonly variables: Readonly<NonNullable<V>>
  readonly extensions: GraphQLExtensions
  readonly options: GraphQLExchangeOptions
}

export type GraphQLExchangeNext = (request?: GraphQLRequest) => Promise<GraphQLServerResult>
export type GraphQLExchangeUpdate = (updater: GraphQLExchangeUpdater) => void
export type GraphQLExchangeUpdater = (result: GraphQLServerResult) => GraphQLServerResult

export type GraphQLExchange = (
  request: GraphQLRequest,
  next: GraphQLExchangeNext,
  update: GraphQLExchangeUpdate,
) => Promise<GraphQLServerResult>

/* eslint-enable @typescript-eslint/no-explicit-any */
