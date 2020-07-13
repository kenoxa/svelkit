import type { GraphQLExchange } from '../types'
import { minimize } from '../internal/minimize'

/** An exchange to minimize the graphql string. */
const minimizeExchange = (): GraphQLExchange => {
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

export { minimizeExchange as minimize }
