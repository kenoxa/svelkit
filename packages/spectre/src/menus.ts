import { define, withPrefix, classNamesToVariants, isString, stable } from './internal'

const MENU_VARIANTS = ['nav', 'item', 'badge'] as const

export interface MenuOptions {
  nav?: boolean
  item?: boolean
  badge?: boolean
}

export const menu = define((options: typeof MENU_VARIANTS[number] | MenuOptions = {}) => [
  'menu',
  withPrefix('menu-', isString(options) && options),
], {
  ...classNamesToVariants(MENU_VARIANTS, 'menu-'),
  nav: define(stable('menu-nav')),
  item: define(stable('menu-item')),
  badge: define(stable('menu-badge')),
})
