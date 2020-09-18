import type { ClassNameToggler } from './internal'
import { define, isString, isNumber } from './internal'

export interface BarOptions {
  size?: 'sm'
  slider?: boolean
}

export interface BarItemOptions {
  value: number
  min?: number
  max?: number
  role?: string
  tooltip?: string | false
}

export const bar = define((toggle: ClassNameToggler, options?: BarOptions['size'] | BarOptions) => {
  toggle('bar', true)

  if (isString(options)) options = { size: options }

  toggle('bar-sm', options?.size)
  toggle('bar-slider', options?.slider)
}, {
  slider: define((toggle: ClassNameToggler, size?: BarOptions['size']) => {
    toggle('bar', true)
    toggle('bar-sm', size)
    toggle('bar-slider', true)
  }, {
    btn: define((toggle: ClassNameToggler, size?: BarOptions['size'], node?: Element) => {
      toggle('btn', true)
      toggle('bar-slider-btn', true)

      if (node) {
        if (node.tagName === 'BUTTON' && !(node as HTMLButtonElement).type) {
          ;(node as HTMLButtonElement).type = 'button'
        }

        node.setAttribute('role', 'slider')
      }
    }),
  }),

  item: define((toggle: ClassNameToggler, options?: number | BarItemOptions, node?: Element) => {
    toggle('bar-item', true)

    if (isNumber(options)) options = { value: options }

    if (options && node) {
      node.setAttribute('role', options.role || 'progressbar')

      const { value, min = 0, max = 100, tooltip = String(value) } = options

      ;(node as HTMLElement).style.width = String(((value - min) * 100) / (max - min)) + '%'

      node.setAttribute('aria-valuenow', String(value))
      node.setAttribute('aria-valuemin', String(min))
      node.setAttribute('aria-valuemax', String(max))

      if (tooltip !== false) {
        toggle('tooltip', true)
        ;(node as HTMLElement).dataset.tooltip = tooltip
      }
    }
  }),
})
