import type { ClassValue } from './types'

import {
  define,
  classNamesToVariants,
  withPrefix,
  STATES,
  SIZES,
  ensureButtonType,
  isString,
  ActionVariants,
} from './internal'

const BUTTON_VARIANTS = ['primary', 'success', 'error', 'link', 'clear'] as const

export interface ButtonOptions {
  state?: typeof STATES[number]
  variant?: typeof BUTTON_VARIANTS[number]
  size?: typeof SIZES[number]
  block?: boolean
  action?: boolean
}

export interface ButtonGroupOptions {
  block?: boolean
}

// eslint-disable-next-line unicorn/prevent-abbreviations
export const btn = define((
  options: string | (string | ClassValue)[] | ButtonOptions = {},
  node?: Element,
) => {
  ensureButtonType(node)

  return [
    'btn',
    isString(options) || Array.isArray(options)
      ? withPrefix('btn-', options)
      : [
          withPrefix('btn-', options.variant, options.size),
          options.state,
          { 'btn-block': options.block, 'btn-action': options.action },
        ],
  ]
}, {
  ...classNamesToVariants([...STATES, ...BUTTON_VARIANTS, ...SIZES, 'block', 'action'], 'btn-'),

  group: define((options: 'block' | ButtonGroupOptions = {}) => [
    'btn-group',
    withPrefix('btn-group-', options as ClassValue),
  ], classNamesToVariants(['block'], 'btn-group-')),
})
