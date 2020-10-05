import type {
  GraphQLClient,
  GraphQLVariables,
  GraphQLOperationContext,
  GraphQLInterceptor,
  GraphQLInterceptorUpdate,
} from '../types'

/* eslint-disable @typescript-eslint/no-explicit-any */
export type Guard<Data = any, V extends GraphQLVariables = GraphQLVariables> = (
  variables: V,
  set: GraphQLInterceptorUpdate<Data, V>,
  context: GraphQLOperationContext<V>,
  client: GraphQLClient,
) => unknown

export const withGuard = <Data = any, V extends GraphQLVariables = GraphQLVariables>(
  guard: Guard<Data, V>,
): GraphQLInterceptor<Data, V> => (context, next, set, client) => {
  if (guard(context.variables, set, context, client)) {
    return next()
  }
}
/* eslint-enable @typescript-eslint/no-explicit-any */
