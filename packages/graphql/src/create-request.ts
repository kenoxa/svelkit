import type { Readable, Writable } from 'svelte/store'
import type {
  GraphQLClient,
  GraphQLVariables,
  GraphQLOperationContext,
  GraphQLRequestOptions,
  GraphQLStore,
  GraphQLExecutor,
  GraphQLStoreValue,
  GraphQLResponse,
  GraphQLOperationOptions,
  GraphQLInterceptor,
  GraphQLInterceptorUpdate,
  GraphQLInterceptorResult,
} from './types'

import { get, derived, writable } from 'svelte/store'
import { toPromise } from './internal/to-promise'
import { useGraphQLClient } from './client'

/* eslint-disable @typescript-eslint/no-explicit-any */
const executeRequest = <Data = any, V extends GraphQLVariables = GraphQLVariables>(
  { query, variables, options }: GraphQLOperationContext<V>,
  set: GraphQLInterceptorUpdate<Data, V>,
  client: GraphQLClient,
): GraphQLInterceptorResult => client.request(query, variables, options).subscribe(set)

const merge = <T>(a: Partial<T> | undefined, b: Partial<T> | undefined): T =>
  (a && b ? { ...a, ...b } : a || b) as T

const updateMerged = <T>(
  store: { update(updater: (value: T) => T): void },
  updates: Partial<T>,
): void => {
  store.update((current) => merge(current, updates))
}

const callInterceptor = <Data = any, V extends GraphQLVariables = GraphQLVariables>(
  interceptors: GraphQLInterceptor<Data, V>[],
  index: number,
  context: GraphQLOperationContext<V>,
  update: GraphQLInterceptorUpdate<Data, V>,
  client: GraphQLClient,
): GraphQLInterceptorResult => // eslint-disable-line max-params
  index === interceptors.length
    ? executeRequest(context, update, client)
    : interceptors[index](
        context,
        (nextContext = context, nextUpdate = update, nextClient = client) =>
          callInterceptor(interceptors, index + 1, nextContext, nextUpdate, nextClient),
        update,
        client,
      )

// eslint-disable-next-line @typescript-eslint/ban-types
class ExtensibleFunction<T extends Function> extends Function {
  constructor(f: T) {
    // eslint-disable-next-line no-constant-condition
    if (1 < 0) {
      // Make typescript happy
      super()
    }

    // eslint-disable-next-line no-constructor-return
    return Object.setPrototypeOf(f, new.target.prototype) as T
  }
}

class Request<Data = any, V extends GraphQLVariables = GraphQLVariables>
  extends ExtensibleFunction<
    (
      moreVariables?: Partial<V> | undefined,
      moreOptions?: Partial<GraphQLRequestOptions> | undefined,
    ) => GraphQLStore<Data, V>
  >
  implements GraphQLStore<Data, V> {
  // eslint-disable-next-line max-params
  constructor(
    client: GraphQLClient,
    interceptors: GraphQLInterceptor<Data, V>[],
    query: string,
    variables: V,
    options: Partial<GraphQLOperationOptions<Data, V>>,
  ) {
    const context = writable<GraphQLOperationContext<V>>({ query, variables, options })

    super(
      (
        moreVariables?: Partial<V> | undefined,
        moreOptions?: Partial<GraphQLRequestOptions> | undefined,
      ): GraphQLStore<Data, V> => {
        const { context } = this

        return new Request(
          client,
          interceptors,
          context.query,
          merge(context.variables, moreVariables),
          merge(context.options, moreOptions),
        )
      },
    )

    this.update = context.update
    this.get = () => get(context) as GraphQLOperationContext<V>

    const store = derived<Readable<GraphQLOperationContext<V>>, GraphQLStoreValue<Data, V>>(
      context,
      ($context: GraphQLOperationContext<V>, set: (value: GraphQLStoreValue<Data, V>) => void) =>
        callInterceptor(interceptors, 0, $context, set, client),
      { ...this.context, fetching: false },
    )

    this.subscribe = store.subscribe
  }

  subscribe: Readable<GraphQLStoreValue<Data, V>>['subscribe']
  update: Writable<GraphQLOperationContext<V>>['update']
  private get: () => GraphQLOperationContext<V>

  set(values: GraphQLOperationContext<V>): void {
    this.update(() => values)
  }

  then<TResult1 = GraphQLResponse<Data>, TResult2 = never>(
    onfulfilled?:
      | ((value: GraphQLStoreValue<Data, V>) => TResult1 | PromiseLike<TResult1>)
      | undefined
      | null,
    onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
  ): PromiseLike<TResult1 | TResult2> {
    return toPromise(this).then(onfulfilled, onrejected)
  }

  fetch(
    moreVariables?: Partial<V> | undefined,
    moreOptions?: Partial<GraphQLRequestOptions> | undefined,
  ): GraphQLStore<Data, V> {
    this.update(({ query, variables, options }) => ({
      query,
      variables: merge(variables, moreVariables),
      options: merge(options, moreOptions),
    }))

    return this
  }

  get context(): GraphQLOperationContext<V> {
    return this.get()
  }

  set context(value) {
    this.set(value)
  }

  get query(): string {
    return this.get().query
  }

  set query(query) {
    updateMerged(this, { query })
  }

  get variables(): V {
    return this.get().variables
  }

  set variables(variables) {
    updateMerged(this, { variables })
  }

  get options(): GraphQLRequestOptions {
    return this.get().options
  }

  set options(options) {
    updateMerged(this, { options })
  }
}

export function createRequest<Data = any, V extends GraphQLVariables = GraphQLVariables>(
  client = useGraphQLClient(),
  query: string,
  variables?: Partial<V> | undefined,
  { intercept = [], ...options }: Partial<GraphQLOperationOptions<Data, V>> = {},
): GraphQLExecutor<Data, V> {
  return (new Request(
    client,
    (Array.isArray(intercept) ? intercept : [intercept]).filter(Boolean) as GraphQLInterceptor[],
    query,
    variables as V,
    options,
  ) as unknown) as GraphQLExecutor<Data, V>
}
/* eslint-enable @typescript-eslint/no-explicit-any */
