import { define, stable, classNamesToVariants } from './internal'

export const empty = define(stable('empty'), classNamesToVariants(
  ['icon', 'title', 'subtitle', 'action'] as const,
  'empty-',
))
