import type { ClassNameToggler } from './internal'
import { define, classNamesToVariants, isBoolean, isString } from './internal'

export interface DropdownOptions {
  direction?: 'right'
  active?: boolean
}

export const dropdown = define((
  toggle: ClassNameToggler,
  options?: boolean | 'right' | DropdownOptions,
) => {
  toggle('dropdown', true)

  if (isBoolean(options)) {
    options = { active: options }
  } else if (isString(options)) {
    options = { direction: options }
  }

  toggle('active', options?.active)
  toggle('dropdown-right', options?.direction === 'right')
}, classNamesToVariants(['active', 'right', 'toggle'], 'dropdown-'))
