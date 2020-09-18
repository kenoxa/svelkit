import type { ClassNameToggler } from './internal'
import { define, classNamesToVariants } from './internal'

export const menu = define((toggle: ClassNameToggler, variant?: 'nav') => {
  toggle('menu', true)
  toggle('menu-nav', variant === 'nav')
}, classNamesToVariants(['item', 'badge'] as const, 'menu-'))
