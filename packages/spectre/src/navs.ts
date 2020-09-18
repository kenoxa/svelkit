import type { ClassNameToggler } from './internal'
import { define, stable, classNamesToVariants, isBoolean } from './internal'

export interface NavItemOptions {
  active?: boolean
}

export const nav = define(stable('nav'), {
  item: define((toggle: ClassNameToggler, options?: boolean | NavItemOptions) => {
    toggle('nav-item', true)

    toggle('active', isBoolean(options) ? options : options?.active)
  }, classNamesToVariants(['active'], 'nav-item-')),
})
