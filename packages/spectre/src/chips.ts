import type { ClassNameToggler } from './internal'
import { define, stable } from './internal'

import classNames from './styles/spectre.module.scss'

export interface ChipOptions {
  active?: boolean
}

export const chip = define((toggle: ClassNameToggler, options?: ChipOptions) => {
  toggle(classNames.chip, true)
  toggle(classNames.active, options?.active)
}, {
  active: define(stable(classNames.chip, classNames.active)),
})
