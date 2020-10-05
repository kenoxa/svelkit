import type { GraphQLVariables, GraphQLExecutor, GraphQLOperationOptions } from './types'

import { useGraphQLClient } from './client'
import { createRequest } from './create-request'

/* eslint-disable @typescript-eslint/no-explicit-any */
export function useRequest<Data = any, V extends GraphQLVariables = GraphQLVariables>(
  query: string,
  variables?: Partial<V> | undefined,
  options?: Partial<GraphQLOperationOptions<Data, V>> | undefined,
): GraphQLExecutor<Data, V> {
  return createRequest(useGraphQLClient(), query, variables, options)
}

export { useRequest as useQuery, useRequest as useMutation }
/* eslint-enable @typescript-eslint/no-explicit-any */
