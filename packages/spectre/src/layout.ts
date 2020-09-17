import type { ClassNameToggler } from './internal'
import type { Action } from './types'

import { define, stable, classNamesToVariants, isString, isNumber } from './internal'

const BREAKPOINTS = ['xs', 'sm', 'md', 'lg', 'xl'] as const

export type Breakpoint = (typeof BREAKPOINTS)[number]


export interface Breakpoints<Config> extends Partial<Record<Breakpoint, Config>> {
  default?: Config
}

export type Responsive<Config> =
  | [/* default: */ Config]
  | [/* default: */ Config, /* xs: */ Config]
  | [/* default: */ Config, /* xs: */ Config, /* sm: */ Config]
  | [/* default: */ Config, /* xs: */ Config, /* sm: */ Config, /* md: */ Config]
  | [/* default: */ Config, /* xs: */ Config, /* sm: */ Config, /* md: */ Config, /* lg: */ Config]
  | [
      /* Default: */ Config,
      /* Xs: */ Config,
      /* Sm: */ Config,
      /* Md: */ Config,
      /* Lg: */ Config,
      /* Xl: */ Config,
    ]
  | Config[]

export const container = define((toggle: ClassNameToggler, breakpoint?: Breakpoint) => {
  toggle('container', true)

  BREAKPOINTS.forEach((key) => {
    toggle('grid-' + key, breakpoint === key)
  })
}, classNamesToVariants(BREAKPOINTS, 'container grid-'))

export interface ColumnsOptions {
  gapless?: boolean
  oneline?: boolean
}

const gapless = stable('columns', 'col-gapless')
const oneline = stable('columns', 'col-oneline')

export const columns = define((toggle: ClassNameToggler, options?: ColumnsOptions) => {
  toggle('columns', true)
  toggle('col-gapless', options?.gapless)
  toggle('col-oneline', options?.oneline)
}, {
  gapless: define(gapless, { oneline: define(oneline) }),
  oneline: define(oneline, { gapless: define(gapless) }),
})

export const cols = columns
export const row = columns

export type ColumnSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto' | 'hide' | 'show'
export type ColumnMargin = 'auto' | 'left' | 'right'

const applyColumnClasses = (
  breakpoint: string,
  toggle: ClassNameToggler,
  size?: ColumnSize,
): void => {
  for (let index = 12; index; index--) {
    toggle(`col${breakpoint}-${index}`, size === index)
  }

  toggle(`col${breakpoint}-auto`, size === 'auto')
  toggle(`hide${breakpoint}`, size === 'hide')
  toggle(`show${breakpoint}`, size === 'show')
}

const updateColumnClasses = (
  toggle: ClassNameToggler,
  breakpoints: Responsive<ColumnSize | undefined>,
): void => {
  applyColumnClasses('', toggle, breakpoints[0])

  BREAKPOINTS.forEach((key, index) => {
    applyColumnClasses('-' + key, toggle, breakpoints[index + 1])
  })
}

const columnBreakpoint = (key: string): Action<ColumnSize> =>
  define((toggle: ClassNameToggler, size?: ColumnSize) => {
    toggle('column', true)
    applyColumnClasses('-' + key, toggle, size)
  })

export const column = define((
  toggle: ClassNameToggler,
  size?: ColumnSize | Responsive<ColumnSize> | Breakpoints<ColumnSize>,
) => {
  toggle('column', true)

  if (Array.isArray(size)) {
    updateColumnClasses(toggle, size)
  } else if (isNumber(size) || isString(size)) {
    updateColumnClasses(toggle, [size])
  } else if (size) {
    updateColumnClasses(toggle, [size.default, size.xs, size.sm, size.md, size.lg, size.xl])
  } else {
    updateColumnClasses(toggle, [])
  }
}, {
  xs: columnBreakpoint('xs'),
  sm: columnBreakpoint('sm'),
  md: columnBreakpoint('md'),
  lg: columnBreakpoint('lg'),
  xl: columnBreakpoint('xl'),
  margin: define((toggle: ClassNameToggler, margin: ColumnMargin = 'auto') => {
    toggle('col-mx-auto', margin === 'auto')
    toggle('col-ml-auto', margin === 'left')
    toggle('col-mr-auto', margin === 'right')
  }),
})

export const col = column
