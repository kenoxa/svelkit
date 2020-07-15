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
  variables: Partial<V> | undefined = {},
  options: GraphQLRequestOptions | undefined = {},
): GraphQLExecutor<T, V> => {
  const client = useGraphQLClient()

  const request = (
    additionalVariables?: Partial<V> | undefined,
    additionalOptions?: GraphQLRequestOptions,
  ): GraphQLStore<T, V> => {
    const store = client.request(
      query,
      { ...variables, ...additionalVariables },
      { ...options, ...additionalOptions },
    ) as GraphQLStore<T, V>

    store.then = then

    store.fetch = (moreVariables, moreOptions) =>
      request(
        { ...additionalVariables, ...moreVariables },
        { ...additionalOptions, ...moreOptions },
      )

    return store
  }

  const store = request()

  return Object.assign(store.fetch, store) as GraphQLExecutor<T, V>
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
