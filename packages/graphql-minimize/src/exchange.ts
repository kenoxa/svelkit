import type { GraphQLExchange } from '@svelkit/graphql'
import { minimize } from './minimize'

/** An exchange to minimize the graphql string. */
export function minimizeExchange(): GraphQLExchange {
  const cache = new Map<string, string>()

  const minify = (gql: string): string => {
    let minified = cache.get(gql)

    if (!minified) {
      cache.set(gql, (minified = minimize(gql)))
    }

    return minified
  }

  return (request, next) => next({ ...request, query: minify(request.query) })
}
