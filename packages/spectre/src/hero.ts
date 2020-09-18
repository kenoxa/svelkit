import type { ClassNameToggler } from './internal'
import { define, stable, forEach, SIZES, isString } from './internal'

export interface HeroOptions {
  size?: typeof SIZES[number]
}

export const hero = define((
  toggle: ClassNameToggler,
  options?: typeof SIZES[number] | HeroOptions,
) => {
  toggle('hero', true)

  forEach(SIZES, isString(options) ? options : options?.size, 'hero-', toggle)
}, {
  body: define(stable('hero-body')),
})
