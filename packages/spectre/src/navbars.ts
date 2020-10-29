import { define, withPrefix, classNamesToVariants } from './internal'

const FORM_VARIANTS = ['section', 'center', 'brand'] as const

export interface NavbarOptions {
  variant?: typeof FORM_VARIANTS[number]
}

export const navbar = define(({ variant }: NavbarOptions = {}) => [
  'navbar',
  withPrefix('navbar-', variant),
], {
  ...classNamesToVariants(FORM_VARIANTS, 'navbar-'),
})
