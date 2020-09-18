import type { ClassNameToggler } from './internal'
import { define, stable, classNamesToVariants, forEach, PRESENCES } from './internal'

const SIZES = ['xs', 'sm', 'lg', 'xl'] as const

export interface AvatarOptions {
  size?: typeof SIZES[number]
  initial?: string
}

export const avatar = define((
  toggle: ClassNameToggler,
  options?: AvatarOptions,
  node?: Element,
) => {
  toggle('avatar', true)

  forEach(SIZES, options?.size, 'avatar-', toggle)

  if (options?.initial && node) {
    ;(node as HTMLElement).dataset.initial = options.initial
  }
}, {
  icon: define(stable('avatar-icon')),
  presence: define((toggle: ClassNameToggler, status?: typeof PRESENCES[number]) => {
    toggle('avatar-presence', true)

    forEach(PRESENCES, status, '', toggle)
  }, classNamesToVariants(PRESENCES)),
})
