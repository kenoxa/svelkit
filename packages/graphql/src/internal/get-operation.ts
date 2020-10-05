import type { GraphQLOperationType } from '../types'

const OP_REGEXP = /(?:^|})\s*(?:(query|mutation|subscription)\s*(\w+)?\s*[({]|{)/gm

export const getOperation = (
  gql: string,
  name?: string | undefined | null
): { type: GraphQLOperationType; name: string | undefined } => {
  // As we return early below we must reset the index before each run
  OP_REGEXP.lastIndex = 0

  let match: RegExpExecArray | null | undefined

  while ((match = OP_REGEXP.exec(gql)) !== null) {
    // Either use the first match or the one with matching name
    if (!name || match[2] === name) {
      return {
        // Support query shorthand: http://spec.graphql.org/draft/#sec-Language.Operations.Query-shorthand
        type: (match[1] as GraphQLOperationType) || 'query',
        name: name || match[2],
      }
    }
  }

  if (name) {
    throw new Error(`Operation ${name} not found in gql`)
  }

  throw new Error(`No operation found in gql`)
}
