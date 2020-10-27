import { define, withPrefix, classNamesToVariants, isString } from './internal'

const TOAST_VARIANTS = ['primary', 'success', 'warning', 'error'] as const

export interface ToastOptions {
  variant?: typeof TOAST_VARIANTS[number]
}

export const toast = define((options: typeof TOAST_VARIANTS[number] | ToastOptions = {}) => [
  'toast',
  isString(options) || Array.isArray(options)
    ? options
    : [withPrefix('toast toast-', options.variant)],
], {
  ...classNamesToVariants(TOAST_VARIANTS, 'toast toast-'),
})
