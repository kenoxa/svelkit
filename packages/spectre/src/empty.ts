import { define, classNamesToVariants, withPrefix } from './internal'

const EMPTY_VARIANTS = ['icon', 'title', 'subtitle', 'action'] as const

export const empty = define((variant?: (typeof EMPTY_VARIANTS)[number]) => ['empty', withPrefix('empty-', variant)], classNamesToVariants(
  EMPTY_VARIANTS,
  'empty-',
))
