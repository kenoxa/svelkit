import { define, stable } from './internal'

export interface NavItemOptions {
  state?: 'active'
}
export const nav = define(stable('nav'), {
  item: define((state?: NavItemOptions['state']) => ['nav-item', state]),
})
