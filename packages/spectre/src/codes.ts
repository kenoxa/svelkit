import { define, updateAttribute } from './internal'

export const code = define((lang?: string, node?: Element) => {
  updateAttribute(node, 'lang', lang)

  return 'code'
})
