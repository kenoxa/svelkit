import type { ClassNameToggler } from './internal'
import { define, stable } from './internal'

import classNames from './styles/spectre.module.scss'
import type { Action } from './types'

export type Breakpoint = 'xl' | 'lg' | 'md' | 'sm' | 'xs'

export interface Breakpoints<Config> {
  xs?: Config
  sm?: Config
  md?: Config
  lg?: Config
  xl?: Config
}

export type Responsive<Config> =
  | [/* xs: */ Config]
  | [/* xs: */ Config, /* sm: */ Config]
  | [/* xs: */ Config, /* sm: */ Config, /* md: */ Config]
  | [/* xs: */ Config, /* sm: */ Config, /* md: */ Config, /* lg: */ Config]
  | [/* xs: */ Config, /* sm: */ Config, /* md: */ Config, /* lg: */ Config, /* xl: */ Config]
  | Config[]

export const container = define((toggle: ClassNameToggler, breakpoint?: Breakpoint) => {
  toggle(classNames.container, true)
  toggle(classNames['grid-xl'], breakpoint === 'xl')
  toggle(classNames['grid-lg'], breakpoint === 'lg')
  toggle(classNames['grid-md'], breakpoint === 'md')
  toggle(classNames['grid-sm'], breakpoint === 'sm')
  toggle(classNames['grid-xs'], breakpoint === 'xs')
}, {
  xl: define(stable(classNames.container, classNames['grid-xl'])),
  lg: define(stable(classNames.container, classNames['grid-lg'])),
  md: define(stable(classNames.container, classNames['grid-md'])),
  sm: define(stable(classNames.container, classNames['grid-sm'])),
  xs: define(stable(classNames.container, classNames['grid-xs'])),
})

export interface ColumnsOptions {
  gapless?: boolean
  oneline?: boolean
}

const gapless = stable(classNames.columns, classNames.colGapless)
const oneline = stable(classNames.columns, classNames.colOneline)

export const columns = define((toggle: ClassNameToggler, options?: ColumnsOptions) => {
  toggle(classNames.columns, true)
  toggle(classNames.colGapless, options?.gapless)
  toggle(classNames.colOneline, options?.oneline)
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
    toggle(classNames[`col${breakpoint}-${index}`], size === index)
  }

  toggle(classNames[`col${breakpoint}-auto`], size === 'auto')
  toggle(classNames[`hide${breakpoint}`], size === 'hide')
  toggle(classNames[`show${breakpoint}`], size === 'show')
}

const updateColumnClasses = (
  toggle: ClassNameToggler,
  size?: ColumnSize,
  xs?: ColumnSize,
  sm?: ColumnSize,
  md?: ColumnSize,
  lg?: ColumnSize,
  xl?: ColumnSize,
): void => {
  // eslint-disable-line max-params
  applyColumnClasses('', toggle, size)
  applyColumnClasses('-xs', toggle, xs)
  applyColumnClasses('-sm', toggle, sm)
  applyColumnClasses('-md', toggle, md)
  applyColumnClasses('-lg', toggle, lg)
  applyColumnClasses('-xl', toggle, xl)
}

export const columnBreakpoint = (key: string): Action<ColumnSize> =>
  define((toggle: ClassNameToggler, size?: ColumnSize) => {
    toggle(classNames.column, true)
    applyColumnClasses('-' + key, toggle, size)
  })

export const column = define((
  toggle: ClassNameToggler,
  size?: ColumnSize | Responsive<ColumnSize> | Breakpoints<ColumnSize>,
) => {
  toggle(classNames.column, true)

  if (Array.isArray(size)) {
    updateColumnClasses(toggle, undefined, ...size)
  } else if (typeof size === 'number' || typeof size === 'string') {
    updateColumnClasses(toggle, size)
  } else if (size) {
    updateColumnClasses(toggle, undefined, size.xs, size.lg, size.md, size.lg, size.xl)
  } else {
    updateColumnClasses(toggle)
  }
}, {
  xs: columnBreakpoint('xs'),
  sm: columnBreakpoint('sm'),
  md: columnBreakpoint('md'),
  lg: columnBreakpoint('lg'),
  xl: columnBreakpoint('xl'),
  margin: define((toggle: ClassNameToggler, margin: ColumnMargin = 'auto') => {
    toggle(classNames['col-mx-auto'], margin === 'auto')
    toggle(classNames['col-ml-auto'], margin === 'left')
    toggle(classNames['col-mr-auto'], margin === 'right')
  }),
})

export const col = column
