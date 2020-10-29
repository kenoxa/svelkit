import { define, classNamesToVariants, withPrefix } from './internal'

export interface TableOptions {
  striped?: boolean
  hover?: boolean
  scroll?: boolean
}
export interface TableRowOptions {
  active?: boolean
}

export const table = define(({ striped, hover, scroll }: TableOptions = {}) => [
  'table',
  withPrefix('table-', { striped, hover, scroll }),
], classNamesToVariants(['striped', 'hover', 'scroll'], 'table-'))
