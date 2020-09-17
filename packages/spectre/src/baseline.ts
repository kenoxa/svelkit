import type { ClassNameToggler } from './internal'
import { define } from './internal'

const scoped = define((toggle: ClassNameToggler) => {
  toggle('baseline', true)
})

export const baseline = Object.assign(
  (node: Element = document?.documentElement) => scoped(node),
  scoped,
)
