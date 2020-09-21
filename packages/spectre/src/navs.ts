import { define, stable, classNamesToVariants, isBoolean } from './internal'

export interface NavItemOptions {
  active?: boolean
}

export const nav = define(stable('nav'), {
  item: define((options: boolean | NavItemOptions = {}) => ({
    modal: 1,
    active: isBoolean(options) ? options : options.active,
  }), classNamesToVariants(['active'])),
})
