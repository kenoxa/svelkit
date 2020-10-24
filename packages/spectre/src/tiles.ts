import { define, classNamesToVariants, withPrefix } from './internal'

const TILE_VARIANTS = ['centered', 'icon', 'content', 'title', 'subtitle', 'action'] as const

export const tile = define((variant?: typeof TILE_VARIANTS[number]) => [
  'tile',
  withPrefix(variant === 'centered' ? 'tile tile-' : 'tile-', variant),
], classNamesToVariants(TILE_VARIANTS, 'tile-'))
