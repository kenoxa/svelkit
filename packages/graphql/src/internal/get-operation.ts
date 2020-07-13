import type { GraphQLOperationType } from '../types'

export const getOperation = (
  gql: string,
): { type: GraphQLOperationType; name: string | undefined } => {
  const match = /(?:^|})\s*(?:(query|mutation|subscription)\s*(\w+)?\s*[({]|{)/m.exec(gql) || []

  return {
    // Support query shorthand: http://spec.graphql.org/draft/#sec-Language.Operations.Query-shorthand
    type: (match[1] as GraphQLOperationType) || 'query',
    name: match[2],
  }
}
