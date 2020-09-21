import { define, stable } from './internal'

const scoped = define(stable('baseline'))

export const baseline = Object.assign(
  (node: Element = document?.documentElement) => scoped(node),
  scoped,
)
