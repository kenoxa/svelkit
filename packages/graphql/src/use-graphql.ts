import type { GraphQLVariables, GraphQLExecutor, GraphQLOperationOptions } from './types'

import { useGraphQLClient } from './client'
import { createRequest } from './create-request'

/* eslint-disable @typescript-eslint/no-explicit-any */
export function useGraphQL<Data = any, V extends GraphQLVariables = GraphQLVariables>(
  query: string,
  variables?: Partial<V> | undefined,
  options?: Partial<GraphQLOperationOptions<Data, V>> | undefined,
): GraphQLExecutor<Data, V> {
  return createRequest(useGraphQLClient(), query, variables, options)
}

export { useGraphQL as useQuery, useGraphQL as useMutation }
/* eslint-enable @typescript-eslint/no-explicit-any */
