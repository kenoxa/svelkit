import { define, stable } from './internal'

export const breadcrumb = define(stable('breadcrumb'), {
  item: define(stable('breadcrumb-item')),
})
