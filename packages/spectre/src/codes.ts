import type { ClassNameToggler } from './internal'
import { define } from './internal'

export const code = define((toggle: ClassNameToggler, lang?: string, node?: Element) => {
  toggle('code', true)

  if (lang && node) {
    // eslint-disable-next-line unicorn/prefer-dataset
    node.setAttribute('data-lang', lang)
  }
})
