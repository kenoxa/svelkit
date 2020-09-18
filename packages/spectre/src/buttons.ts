import type { ClassNameToggler } from './internal'
import { define, classNamesToVariants, forEach, SIZES } from './internal'

import classNames from './styles/spectre.module.scss'

const STATES = ['active', 'loading', 'disabled'] as const
const VARIANTS = ['primary', 'success', 'error', 'link', 'clear'] as const

export interface ButtonOptions {
  state?: typeof STATES[number]
  variant?: typeof VARIANTS[number]
  size?: typeof SIZES[number]
  block?: boolean
  action?: boolean
}

export interface ButtonGroupOptions {
  block?: boolean
}

export const button = define((
  toggle: ClassNameToggler,
  options?: ButtonOptions,
  node?: Element,
) => {
  toggle('btn', true)

  forEach(STATES, options?.state, 'btn-', toggle)
  forEach(VARIANTS, options?.variant, 'btn-', toggle)
  forEach(SIZES, options?.size, 'btn-', toggle)

  toggle('btn-block', options?.block)

  toggle('btn-action', options?.action)

  if (node) {
    if (node.tagName === 'BUTTON' && !(node as HTMLButtonElement).type) {
      ;(node as HTMLButtonElement).type = 'button'
    }

    const parentClassList = node.parentElement?.classList

    if (parentClassList) {
      toggle('input-group-btn', parentClassList.contains(classNames['input-group']))

      if (parentClassList.contains(classNames['bar-item'])) {
        toggle('bar-slider-btn', true)
        node.setAttribute('role', 'slider')
      }

      toggle(
        'dropdown-toggle',
        parentClassList.contains(classNames.dropdown) ||
          (parentClassList.contains(classNames['btn-group']) &&
            node.parentElement?.parentElement?.classList.contains(classNames.dropdown)),
      )
    }
  }
}, {
  ...classNamesToVariants([...STATES, ...VARIANTS, ...SIZES, 'block', 'action'], 'btn-'),

  group: define((toggle: ClassNameToggler, options?: ButtonGroupOptions) => {
    toggle('btn-group', true)
    toggle('btn-group-block', options?.block)
  }, classNamesToVariants(['block'], 'btn-group-')),
})
