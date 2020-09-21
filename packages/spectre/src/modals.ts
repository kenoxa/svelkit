import { define, classNamesToVariants, SIZES, isString, isBoolean, withPrefix } from './internal'

export interface ModalOptions {
  active?: boolean
  size?: typeof SIZES[number]
}

export interface ModalContainerOptions {
  fullheight?: boolean
}

export const modal = define((options: boolean | typeof SIZES[number] | ModalOptions = {}) => {
  if (isBoolean(options)) {
    options = { active: options }
  } else if (isString(options)) {
    options = { size: options }
  }

  // TODO if active and not focus-within
  // node.focus()
  // node.setAttribute('aria-hidden', active)
  // mainPage.setAttribute('aria-hidden', !active)
  return ['modal', options.active && 'active', withPrefix('modal-', options.size)]
}, {
  ...classNamesToVariants(['overlay', 'header', 'body', 'footer'], 'modal-'),
  container: define((options: boolean | ModalContainerOptions = {}) => [
    'modal-container',
    (isBoolean(options) ? options : options.fullheight) && 'modal-fullheight',
  ], classNamesToVariants(['fullheight'], 'modal-')),
})
