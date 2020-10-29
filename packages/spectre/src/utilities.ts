import type { Action } from './types'
import {
  define,
  defineWithClassNames,
  classNamesToVariants,
  isBoolean,
  isNumber,
  stable,
  updateDatasetKey,
  withPrefix,
  isString,
} from './internal'

// Use:active
export const active = define(stable('active'))

// Use:text('primary center uppercase muted')
export const text = defineWithClassNames((className) => 'text-' + className, [
  // From styles/utilities/colors
  'primary',
  'secondary',
  'gray',
  'light',
  'dark',
  'success',
  'warning',
  'error',

  // From styles/utilities/display
  'hide',
  'assistive',

  // From styles/utilities/text
  'left',
  'right',
  'center',
  'justify',
  'lowercase',
  'uppercase',
  'capitalize',
  'normal',
  'bold',
  'italic',
  'large',
  'small',
  'tiny',
  'muted',
  'ellipsis',
  'clip',
  'break',
] as const)

// Use:bg('primary')
export const bg = defineWithClassNames((className) => 'bg-' + className, [
  // From styles/utilities/colors
  'primary',
  'secondary',
  'gray',
  'light',
  'dark',
  'success',
  'warning',
  'error',
] as const)

export const cursor = define(stable(), {
  ...classNamesToVariants(
    [
      // From styles/utilities/cursors
      'hand',
      'move',
      'auto',
    ] as const,
    'c-',
  ),
  zoomIn: define(stable('c-zoom-in')),
  zoomOut: define(stable('c-zoom-out')),
  notAllowed: define(stable('c-not-allowed')),
})

// Use:centered('p') || Use:centered('flex')
export const centered = defineWithClassNames(
  (className = 'flex') => (className === 'block' ? 'p' : className) + '-centered',
  [
    // From styles/utilities/colors
    'p',
    'block',
    'flex',
  ] as const,
)

export const clearfix = define(stable('clearfix'))

export interface LoadingOptions {
  enable?: boolean
  lg?: boolean
}

export const display = define(stable(), {
  ...classNamesToVariants(
    [
      // From styles/utilities/display
      'block',
      'inline',
      'flex',
      'none',
      'hide',
      'visible',
      'invisible',
    ] as const,
    'd-',
  ),
  inlineBlock: define(stable('d-inline-block')),
  inlineFlex: define(stable('d-inline-flex')),
})

export const loading = define((options: boolean | 'lg' | LoadingOptions = {}) => {
  if (isBoolean(options)) {
    options = { enable: options }
  } else if (options === 'lg') {
    options = { lg: true }
  }

  return { loading: options.enable !== false, 'loading-lg': options.lg }
}, {
  lg: define(stable('loading loading-lg')),
})

const defineDivider = (className: string): Action<string> =>
  define((content?: string, node?: Element) => {
    updateDatasetKey(node, 'content', content)

    return className
  })

export const divider = Object.assign(defineDivider('divider'), {
  vert: defineDivider('divider-vert'),
})

const POSITION_VARIANTS = ['relative', 'absolute', 'fixed', 'sticky', 'centered'] as const
export const position = define((
  options: typeof POSITION_VARIANTS[0] | { variant?: typeof POSITION_VARIANTS[0] } = {},
) => withPrefix('p-', isString(options) ? options : options.variant), {
  ...classNamesToVariants(POSITION_VARIANTS, 'p-'),
})

export const float = define((options: 'left' | 'right' | { side?: 'left' | 'right' } = {}) =>
  withPrefix('float-', isString(options) ? options : options.side), {
  right: define(stable('float-right')),
  left: define(stable('float-left')),
})

const SPACING_OPTIONS = [1, 2] as const
const SPACING_VARIANTS = ['t', 'r', 'b', 'l', 'x', 'y'] as const

export interface SpacingOptions {
  size?: typeof SPACING_OPTIONS[number]
}

const defineSpacing = (className: string): Action<SpacingOptions> =>
  define((options: typeof SPACING_OPTIONS[number] | SpacingOptions = {}) => [
    withPrefix(`${className}-`, isNumber(options) ? options : options.size),
  ])

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const margin = Object.assign(defineSpacing('m'), {
  ...Object.assign(
    {},
    ...SPACING_VARIANTS.map((variant: typeof SPACING_VARIANTS[number]) => ({
      [variant]: defineSpacing(`m${variant}`),
    })),
  ),
})

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const padding = Object.assign(defineSpacing('p'), {
  ...Object.assign(
    {},
    ...SPACING_VARIANTS.map((variant: typeof SPACING_VARIANTS[number]) => ({
      [variant]: defineSpacing(`p${variant}`),
    })),
  ),
})

// Use:shape('rounded') || Use:shape('circle')
export const shape = defineWithClassNames('s-', [
  // From styles/utilities/shapes
  'rounded',
  'circle',
] as const)
