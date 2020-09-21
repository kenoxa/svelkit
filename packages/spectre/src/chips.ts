import { define, stable } from './internal'

export interface ChipOptions {
  active?: boolean
}

export const chip = define(({ active }: ChipOptions = {}) => ({ chip: true, active }), {
  active: define(stable('chip active')),
})
