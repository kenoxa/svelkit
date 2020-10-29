import { define, withPrefix, classNamesToVariants, isString, stable } from './internal'

const ACCORDION_VARIANTS = ['header', 'body'] as const

export interface AccordionOptions {
  header?: boolean
  body?: boolean
}

export const accordion = define((
  options: typeof ACCORDION_VARIANTS[number] | AccordionOptions = {},
) => ['accordion', withPrefix('accordion-', isString(options) && options)], {
  ...classNamesToVariants(ACCORDION_VARIANTS, 'menu-'),
  header: define(stable('accordion-header')),
  body: define(stable('accordion-body')),
})
