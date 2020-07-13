export * from './fetch'
export * from './minimize'

import type { GraphQLExchange } from '../types'
import { minimize } from './minimize'

export const defaultExchanges: GraphQLExchange[] = [minimize()]
