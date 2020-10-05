import type { GraphQLVariables, GraphQLExecutor, GraphQLOperationOptions } from './types'

import { useGraphQLClient } from './client'
import { createRequest } from './create-request'

/* eslint-disable @typescript-eslint/no-explicit-any */
export type Operation<Data = any, V extends GraphQLVariables = GraphQLVariables> = (
  query: string,
  variables?: Partial<V> | undefined,
  options?: Partial<GraphQLOperationOptions> | undefined,
) => GraphQLExecutor<Data, V>

export interface Operations {
  request: <Data = any, V extends GraphQLVariables = GraphQLVariables>(
    query: string,
    variables?: Partial<V> | undefined,
    options?: Partial<GraphQLOperationOptions<Data, V>> | undefined,
  ) => GraphQLExecutor<Data, V>

  query: Operations['request']
  mutate: Operations['request']
}

export function useOperations(client = useGraphQLClient()): Operations {
  const request: Operations['request'] = (query, variables, options) =>
    createRequest(client, query, variables, options)

  return { request, query: request, mutate: request }
}
/* eslint-enable @typescript-eslint/no-explicit-any */
