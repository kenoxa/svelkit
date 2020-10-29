import { define, stable, SIZES, isString, withPrefix } from './internal'

export interface HeroOptions {
  size?: typeof SIZES[number]
}

export const hero = define((options: typeof SIZES[number] | HeroOptions = {}) => [
  'hero',
  withPrefix('hero-', isString(options) ? options : options.size),
], {
  body: define(stable('hero-body')),
})
