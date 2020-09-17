import type { ClassNameToggler } from './internal'
import { define, stable } from './internal'

export interface ChipOptions {
  active?: boolean
}

export const chip = define((toggle: ClassNameToggler, options?: ChipOptions) => {
  toggle('chip', true)
  toggle('active', options?.active)
}, {
  active: define(stable('chip', 'active')),
})
