import { isFunction } from '../internal/is'
import type {
  GraphQLClient,
  GraphQLVariables,
  GraphQLOperationContext,
  GraphQLInterceptor,
  GraphQLInterceptorResult,
} from '../types'

/* eslint-disable @typescript-eslint/no-explicit-any */
export type GetDelay<V extends GraphQLVariables = GraphQLVariables> = (
  variables: V,
  context: GraphQLOperationContext<V>,
  client: GraphQLClient,
) => number

export function withDebounce<Data = any, V extends GraphQLVariables = GraphQLVariables>(
  delay: number | GetDelay,
): GraphQLInterceptor<Data, V> {
  return (context, next, set, client) => {
    let unsubscribe: GraphQLInterceptorResult

    const ref = setTimeout(
      () => {
        unsubscribe = next()
      },
      isFunction(delay) ? delay(context.variables, context, client) : delay,
    )

    unsubscribe = () => clearTimeout(ref)

    return () => unsubscribe && unsubscribe()
  }
}
/* eslint-enable @typescript-eslint/no-explicit-any */
