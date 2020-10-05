import {
  define,
  isString,
  isNumber,
  withPrefix,
  ensureButtonType,
  updateAttribute,
} from './internal'

import type { ButtonOptions } from './buttons'

export interface BarOptions {
  size?: 'sm'
  slider?: boolean
}

export interface BarItemOptions {
  value: number
  min?: number
  max?: number
  role?: string
}

export interface BarSliderButtonOptions {
  state?: ButtonOptions['state']
  variant?: ButtonOptions['variant']
}

export const bar = define((options: BarOptions['size'] | 'slider' | BarOptions = {}) => [
  'bar',
  isString(options)
    ? withPrefix('bar-', options)
    : withPrefix('bar-', options.size, options.slider && 'slider'),
], {
  slider: define((size?: BarOptions['size']) => ['bar bar-slider', withPrefix('bar-', size)]),

  btn: define(({ state, variant }: BarSliderButtonOptions = {}, node?: Element) => {
    ensureButtonType(node)
    updateAttribute(node, 'role', 'slider')

    return ['btn bar-slider-btn', withPrefix('btn-', variant), state]
  }),

  item: define((options: number | BarItemOptions = 0, node?: Element) => {
    // TODO https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/progress/src/useProgressBar.ts
    const { value, min = 0, max = 100, role = 'progressbar' } = isNumber(
      options,
    )
      ? ({ value: options } as const)
      : options

    if (node) {
      ;(node as HTMLElement).style.width = String(((value - min) * 100) / (max - min)) + '%'

      updateAttribute(node, 'role', role)
      updateAttribute(node, 'aria-valuenow', value)
      updateAttribute(node, 'aria-valuemin', min)
      updateAttribute(node, 'aria-valuemax', max)
    }

    return 'bar-item'
  }),
})
