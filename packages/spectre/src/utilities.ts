import type { Action } from './types'
import { define, defineWithClassNames, isBoolean, stable, updateDatasetKey } from './internal'

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

export const cursor = defineWithClassNames((className) => 'c-' + className, [
  // From styles/utilities/cursors
  'hand',
  'move',
  'zoom-in',
  'zoom-out',
  'not-allowed',
  'auto',
] as const)

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

export const loading = define((options: boolean | 'lg' | LoadingOptions = {}) => {
  if (isBoolean(options)) {
    options = { enable: options }
  } else if (options === 'lg') {
    options = { lg: true }
  }

  return { loading: options.enable !== false, 'loading-lg': options.lg }
})

const defineDivider = (className: string): Action<string> =>
  define((content?: string, node?: Element) => {
    updateDatasetKey(node, 'content', content)

    return className
  })

export const divider = Object.assign(defineDivider('divider'), {
  vert: defineDivider('divider-vert'),
})

// Use:shape('rounded') || Use:shape('circle')
export const shape = defineWithClassNames('s-', [
  // From styles/utilities/shapes
  'rounded',
  'circle',
] as const)
