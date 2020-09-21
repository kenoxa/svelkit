import { define, classNamesToVariants, withPrefix } from './internal'

export const menu = define((variant?: 'nav') => [
  'menu',
  withPrefix('menu-', variant),
], classNamesToVariants(['item', 'badge'] as const, 'menu-'))
