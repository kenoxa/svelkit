import { define, updateDatasetKey } from './internal'

export const badge = define((value?: string | number, node?: Element) => {
  updateDatasetKey(node, 'badge', value)

  return 'badge'
})
