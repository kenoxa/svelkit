import { define, classNamesToVariants, isBoolean, isString, withPrefix } from './internal'

export interface DropdownOptions {
  direction?: 'right'
  active?: boolean
}

export const dropdown = define((options: boolean | 'right' | DropdownOptions = {}) => {
  if (isBoolean(options)) {
    options = { active: options }
  } else if (isString(options)) {
    options = { direction: options }
  }

  return ['dropdown', options.active && 'active', withPrefix('dropdown-', options.direction)]
}, classNamesToVariants(['active', 'right', 'toggle'], 'dropdown-'))
