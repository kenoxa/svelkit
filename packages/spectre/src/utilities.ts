import type { Action } from './types'
import type { ClassNameToggler } from './internal'
import { define, defineWithClassNames, isBoolean } from './internal'

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

export const loading = define((
  toggle: ClassNameToggler,
  options?: boolean | 'lg' | LoadingOptions,
) => {
  if (isBoolean(options)) {
    toggle('loading', options !== false)
  } else {
    if (options === 'lg') options = { enable: true, lg: true }

    toggle('loading', options?.enable !== false)
    toggle('loading-lg', options?.lg === true)
  }
})

const defineDivider = (className: string): Action<string> =>
  define((toggle: ClassNameToggler, content?: string, node?: Element) => {
    toggle(className, true)

    if (content) {
      ;(node as HTMLElement).dataset.content = content
    }
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
