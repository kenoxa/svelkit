import { define, withPrefix } from './internal'
export const pagination = define((options: undefined) => [
  'paginations',
  withPrefix('paginations-', options),
])

// #TODO: paginations.ts
