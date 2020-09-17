import type { ClassNameToggler } from './internal'
import { define, defineWithClassNames } from './internal'

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

// Use:centered('p') || Use:centered('flex')
export const centered = defineWithClassNames(
  (className) => (className === 'block' ? 'p' : className) + '-centered',
  [
    // From styles/utilities/colors
    'p',
    'block',
    'flex',
  ] as const,
)

export const clearfix = define((toggle: ClassNameToggler, enable?: boolean) => {
  toggle('clearfix', enable !== false)
})

export interface LoadingOptions {
  enable?: boolean
  lg?: boolean
}

export const loading = define((toggle: ClassNameToggler, options?: boolean | LoadingOptions) => {
  if (typeof options === 'boolean') {
    toggle('loading', options !== false)
  } else {
    toggle('loading', options?.enable !== false)
    toggle('loading-lg', options?.lg === true)
  }
})

// Use:shape('rounded') || Use:shape('circle')
export const shape = defineWithClassNames('s-', [
  // From styles/utilities/shapes
  'rounded',
  'circle',
] as const)
