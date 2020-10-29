import type { Action, ClassValue } from './types'

import {
  define,
  stable,
  classNamesToVariants,
  withPrefix,
  updateDatasetKey,
  PRESENCES,
  isString,
} from './internal'

const AVATAR_SIZES = ['xs', 'sm', 'lg', 'xl'] as const

export interface AvatarOptions {
  size?: typeof AVATAR_SIZES[number]
  initial?: string
}

export type AvatarParameter = AvatarOptions['size'] | AvatarOptions

const useAvatar = (
  size?: typeof AVATAR_SIZES[number],
  initial?: string,
  node?: Element,
): ClassValue[] => {
  updateDatasetKey(node, 'initial', initial)

  return ['avatar', withPrefix('avatar-', size)]
}

const defineAvatar = (size?: typeof AVATAR_SIZES[number]): Action<string> =>
  define((initial?: string, node?: Element) => useAvatar(size, initial, node))

export const avatar = define((options: AvatarParameter = {}, node?: Element) => {
  if (isString(options)) {
    updateDatasetKey(node, 'initial')

    return [
      'avatar',
      (AVATAR_SIZES as readonly string[]).includes(options) && 'avatar',
      withPrefix('avatar-', options),
    ]
  }

  return useAvatar(options.size, options.initial, node)
}, {
  xs: defineAvatar('xs'),
  sm: defineAvatar('sm'),
  md: defineAvatar(),
  lg: defineAvatar('lg'),
  xl: defineAvatar('xl'),
  icon: define(stable('avatar-icon')),
  presence: define((status?: typeof PRESENCES[number]) => ['avatar-presence', status]),
  ...classNamesToVariants(PRESENCES, (presence) => 'avatar-presence ' + presence),
})
