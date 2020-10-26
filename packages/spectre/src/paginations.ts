import type { ClassValue } from './types'

import { define, classNamesToVariants, withPrefix, isString, stable } from './internal'

const STATES = ['active', 'disabled'] as const
const PAGE_VARIANTS = ['prev', 'next', 'title', 'subtitle'] as const

export interface PageOptions {
  state?: typeof STATES[number]
  variant?: typeof PAGE_VARIANTS[number]
}

export const page = define((options: string | (string | ClassValue)[] | PageOptions = {}) => {
  return [
    'page',
    isString(options) || Array.isArray(options)
      ? withPrefix('page-', options)
      : [withPrefix('page-', options.variant), options.state],
  ]
}, {
  ...classNamesToVariants(PAGE_VARIANTS, 'page-'),
  item: define((options: string | (string | ClassValue)[] | PageOptions = {}) => {
    return [
      'page-item',
      isString(options) || Array.isArray(options)
        ? withPrefix(
            options === 'active' || options === 'disabled' ? 'page-item ' : 'page-item page-',
            options,
          )
        : [options.variant && withPrefix('page-item ', `page-${options.variant}`), options.state],
    ]
  }),
  active: define(stable('active')),
  disabled: define(stable('disabled')),
})

export const pagination = define(stable('pagination'))
