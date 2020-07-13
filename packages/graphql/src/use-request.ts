import type { Readable } from 'svelte/store'
import type {
  GraphQLExecutor,
  GraphQLVariables,
  GraphQLRequestOptions,
  GraphQLStore,
  GraphQLResponse,
} from './types'
import { toPromise } from './internal/to-promise'
import { useGraphQLClient } from './client'

/* eslint-disable @typescript-eslint/no-explicit-any */
export const useRequest = <T = any, V extends GraphQLVariables = GraphQLVariables>(
  query: string,
  variables?: Partial<V>,
  options?: GraphQLRequestOptions,
): GraphQLExecutor<T, V> => {
  const client = useGraphQLClient()

  const request = (
    additionalVariables?: Partial<V>,
    additonalOptions?: GraphQLRequestOptions,
  ): Readable<GraphQLResponse<T>> =>
    client.request(query, { ...variables, ...additionalVariables } as V, {
      ...options,
      ...additonalOptions,
    })

  const store = request()

  const executor: GraphQLExecutor<T, V> = (
    additionalVariables?: Partial<V>,
    additonalOptions?: GraphQLRequestOptions,
  ): GraphQLStore<T> => {
    const readable = request(additionalVariables, additonalOptions) as GraphQLStore<T>
    readable.then = then
    return readable
  }

  executor.subscribe = store.subscribe
  executor.then = then

  return executor
}

function then<T, TResult1 = GraphQLResponse<T>, TResult2 = never>(
  this: Readable<GraphQLResponse<T>>,
  onfulfilled?:
    | ((value: GraphQLResponse<T>) => TResult1 | PromiseLike<TResult1>)
    | undefined
    | null,
  onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
): PromiseLike<TResult1 | TResult2> {
  return toPromise(this).then(onfulfilled, onrejected)
}

export { useRequest as useQuery, useRequest as useMutation }
/* eslint-enable @typescript-eslint/no-explicit-any */
