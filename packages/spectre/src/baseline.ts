import type { ClassNameToggler } from './internal'
import { define } from './internal'

import classNames from './styles/spectre.module.scss'

const scoped = define((toggle: ClassNameToggler) => {
  toggle(classNames.baseline, true)
})

export const baseline = Object.assign(
  (node: Element = document.documentElement) => scoped(node),
  scoped,
)
