import { define, withPrefix, classNamesToVariants, isString } from './internal'

const PANEL_VARIANTS = ['right', 'bottom', 'left'] as const
const PANEL_CHILDREN = ['container'] as const

export interface PopoverOptions {
  variant?: typeof PANEL_VARIANTS[number]
}

export const popover = define((options: typeof PANEL_VARIANTS[number] | PopoverOptions = {}) => [
  'popover',
  isString(options)
    ? withPrefix('popover-', options)
    : [withPrefix('popover popover-', options.variant)],
], {
  ...classNamesToVariants(PANEL_VARIANTS, 'popover popover-'),
  ...classNamesToVariants(PANEL_CHILDREN, 'popover-'),
})
