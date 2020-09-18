import { define, classNamesToVariants, stable } from './internal'

export const navbar = define(stable('navbar'), classNamesToVariants(
  ['section', 'center', 'brand'] as const,
  'navbar-',
))
