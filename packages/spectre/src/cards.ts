import type { ClassNameToggler } from './internal'
import { define, stable, classNamesToVariants } from './internal'

export interface CardOptions {
  shadow?: boolean
}

export const card = define((toggle: ClassNameToggler, options?: CardOptions) => {
  toggle('card', true)
  toggle('card-shadow', options?.shadow)
}, {
  ...classNamesToVariants(['image', 'header', 'body', 'footer'], 'card-'),
  shadow: define(stable('card', 'card-shadow')),
})
