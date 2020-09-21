import { define, classNamesToVariants, isString, withPrefix } from './internal'

const LABEL_VARIANTS = ['primary', 'secondary', 'success', 'warning', 'error'] as const

export interface LabelOptions {
  variant?: typeof LABEL_VARIANTS[number]
  rounded?: boolean
}

export const label = define((options: typeof LABEL_VARIANTS[number] | LabelOptions = {}) => {
  if (isString(options)) {
    options = { variant: options }
  }

  return ['label', options.rounded && 'label-rounded', withPrefix('label-', options.variant)]
}, classNamesToVariants([...LABEL_VARIANTS, 'rounded'], 'label-'))
