import { define, withPrefix, classNamesToVariants, isString } from './internal'

const PANEL_VARIANTS = ['header', 'footer', 'nav', 'body', 'title', 'subtitle'] as const

export interface PanelOptions {
  variant?: typeof PANEL_VARIANTS[number]
}

export const panel = define((options: typeof PANEL_VARIANTS[number] | PanelOptions = {}) => [
  'panel',
  isString(options) || Array.isArray(options) ? options : [withPrefix('panel-', options.variant)],
], {
  ...classNamesToVariants(PANEL_VARIANTS, 'panel-'),
})
