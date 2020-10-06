import type {
  GraphQLClient,
  GraphQLVariables,
  GraphQLOperationContext,
  GraphQLInterceptor,
} from '../types'

/* eslint-disable @typescript-eslint/no-explicit-any */
export type Effect<V extends GraphQLVariables = GraphQLVariables> = (
  variables: V,
  context: GraphQLOperationContext<V>,
  client: GraphQLClient,
) => void

export function withEffect<Data = any, V extends GraphQLVariables = GraphQLVariables>(
  effect: Effect<V>,
): GraphQLInterceptor<Data, V> {
  return (context, next, set, client) => {
    effect(context.variables, context, client)
    return next()
  }
}
/* eslint-enable @typescript-eslint/no-explicit-any */
