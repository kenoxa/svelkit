import type { ClassNameToggler } from './internal'
import { define, classNamesToVariants } from './internal'

export interface TableOptions {
  striped?: boolean
  hover?: boolean
  scroll?: boolean
}

export const table = define((toggle: ClassNameToggler, options?: TableOptions) => {
  toggle('table', true)
  toggle('table-striped', options?.striped)
  toggle('table-hover', options?.hover)
  toggle('table-scroll', options?.scroll)
}, classNamesToVariants(['striped', 'hover', 'scroll'], 'table-'))
