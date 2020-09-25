import { define, isNumber, isString, updateDatasetKey, withPrefix } from './internal'

export interface TooltipOptions {
  position?: 'right' | 'bottom' | 'left' | 'top'
  value?: string | number
}

export const tooltip = define((
  options: TooltipOptions['value'] | TooltipOptions = {},
  node?: Element,
) => {
  if (isString(options) || isNumber(options)) {
    options = { value: options }
  }

  // TODO https://frend.co/components/tooltip/
  updateDatasetKey(node, 'tooltip', options.value)

  return ['tooltip', withPrefix('tooltip-', options.position !== 'top' && options.position)]
})
