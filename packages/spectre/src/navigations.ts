import { define, stable, isString } from './internal'

export interface NavItemOptions {
  state?: 'active'
}
export const nav = define(stable('nav'), {
  item: define((options: string | NavItemOptions = {}) => [
    'nav-item',
    isString(options) ? options : options.state,
  ]),
})
