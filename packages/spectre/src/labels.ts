import type { ClassNameToggler } from './internal'
import { define, classNamesToVariants, forEach, isString } from './internal'

const VARIANTS = ['primary', 'secondary', 'success', 'warning', 'error'] as const

export interface LabelOptions {
  variant?: typeof VARIANTS[number]
  rounded?: boolean
}

export const label = define((
  toggle: ClassNameToggler,
  options?: typeof VARIANTS[number] | LabelOptions,
) => {
  toggle('label', true)

  if (isString(options)) {
    options = { variant: options }
  }

  toggle('label-rounded', options?.rounded)
  forEach(VARIANTS, options?.variant, 'label-', toggle)
}, classNamesToVariants([...VARIANTS, 'rounded'], 'label-'))
