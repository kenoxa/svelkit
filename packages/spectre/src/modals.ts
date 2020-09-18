import type { ClassNameToggler } from './internal'
import { define, classNamesToVariants, forEach, SIZES, isString, isBoolean } from './internal'

export interface ModalOptions {
  active?: boolean
  size?: typeof SIZES[number]
}

export interface ModalContainerOptions {
  fullheight?: boolean
}

export const modal = define((
  toggle: ClassNameToggler,
  options?: boolean | typeof SIZES[number] | ModalOptions,
) => {
  toggle('modal', true)

  if (isBoolean(options)) {
    options = { active: options }
  } else if (isString(options)) {
    options = { size: options }
  }

  toggle('active', options?.active)
  forEach(SIZES, options?.size, 'modal-', toggle)
}, {
  ...classNamesToVariants(['overlay', 'header', 'body', 'footer'], 'modal-'),
  container: define((toggle: ClassNameToggler, options?: boolean | ModalContainerOptions) => {
    toggle('modal-container', true)

    toggle('modal-fullheight', isBoolean(options) ? options : options?.fullheight)
  }, classNamesToVariants(['fullheight'], 'modal-')),
})
