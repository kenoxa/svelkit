import type { ClassNameToggler } from './internal'
import { define, classNamesToVariants } from './internal'

const STATES = ['active', 'loading', 'disabled'] as const
const VARIANTS = ['primary', 'success', 'error', 'link', 'clear'] as const
const SIZES = ['sm', 'lg'] as const

export interface ButtonOptions {
  state?: (typeof STATES)[number]
  variant?: (typeof VARIANTS)[number]
  size?: (typeof SIZES)[number]
  block?: boolean
  action?: boolean
}

export interface ButtonGroupOptions {
  block?: boolean
}

export const button = define((toggle: ClassNameToggler, options?: ButtonOptions) => {
  toggle('btn', true)

  STATES.forEach(state => toggle('btn-' + state, options?.state === state))

  VARIANTS.forEach(variant => toggle('btn-' + variant, options?.variant === variant))

  SIZES.forEach(size => toggle('btn-' + size, options?.size === size))

  toggle('btn-block', options?.block)

  toggle('btn-action', options?.action)
}, {
  ...classNamesToVariants([...STATES, ...VARIANTS, ...SIZES, 'block', 'action'], 'btn-'),

  group: define((toggle: ClassNameToggler, options?: ButtonGroupOptions) => {
    toggle('btn-group', true)
    toggle('btn-group-block', options?.block)
  }, classNamesToVariants(['block'], 'btn-group-'))
})
