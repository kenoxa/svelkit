import { define, stable, classNamesToVariants, isString, withPrefix } from './internal'

const CARD_VARIANTS = ['image', 'header', 'body', 'footer', 'title', 'subtitle'] as const

export interface CardOptions {
  shadow?: boolean
}

export type CardParameter = undefined | 'shadow' | typeof CARD_VARIANTS[number] | CardOptions

export const card = define((options: CardParameter = {}) =>
  isString(options)
    ? [options === 'shadow' && 'card', withPrefix('card-', options)]
    : ['card', withPrefix('card-', { shadow: options.shadow })], {
  ...classNamesToVariants(CARD_VARIANTS, 'card-'),
  shadow: define(stable('card card-shadow')),
})
