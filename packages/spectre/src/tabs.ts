import { define, classNamesToVariants, withPrefix, isString, stable } from './internal'

const TAB_VARIANTS = ['block'] as const
const STATES = ['active'] as const

export interface TabOptions {
  variant?: typeof TAB_VARIANTS[number]
}
export interface TabItemOptions {
  state?: typeof STATES[number]
  action?: boolean
}

export const tab = define((options: string | TabOptions = {}) => {
  return [
    'tab',
    isString(options) || Array.isArray(options)
      ? withPrefix('tab-', options)
      : [withPrefix('tab tab-', options.variant)],
  ]
}, {
  ...classNamesToVariants(TAB_VARIANTS, 'tab tab-'),
  item: define((options: string | TabItemOptions = {}) => {
    return [
      'tab-item',
      isString(options) || Array.isArray(options)
        ? withPrefix('tab-', options)
        : [options.state, { 'tab-action': options.action }],
    ]
  }),
  active: define(stable('active')),
  action: define(stable('tab-action')),
})
