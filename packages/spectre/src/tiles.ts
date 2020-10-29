import { define, classNamesToVariants, stable, withPrefix } from './internal'

const TILE_CHILDREN = ['centered', 'icon', 'content', 'title', 'subtitle', 'action'] as const

export const tile = define(stable('tile'), {
  ...classNamesToVariants(TILE_CHILDREN, 'tile-'),
  centered: define(() => ["tile", withPrefix("tile tile-", "centered")]),
})
