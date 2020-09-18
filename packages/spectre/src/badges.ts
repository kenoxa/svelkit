import type { ClassNameToggler } from './internal'
import { define } from './internal'

export const badge = define((toggle: ClassNameToggler, value?: string, node?: Element) => {
  toggle('badge', true)

  if (value && node) {
    ;(node as HTMLElement).dataset.badge = value
  }
})
