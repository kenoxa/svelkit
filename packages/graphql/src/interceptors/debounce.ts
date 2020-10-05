import type { GraphQLVariables, GraphQLInterceptor, GraphQLInterceptorResult } from '../types'

/* eslint-disable @typescript-eslint/no-explicit-any */
export const withDebounce = <Data = any, V extends GraphQLVariables = GraphQLVariables>(
  ms: number,
): GraphQLInterceptor<Data, V> => (context, next) => {
  let unsubscribe: GraphQLInterceptorResult

  const ref = setTimeout(() => {
    unsubscribe = next()
  }, ms)

  unsubscribe = () => clearTimeout(ref)

  return () => unsubscribe && unsubscribe()
}
/* eslint-enable @typescript-eslint/no-explicit-any */
