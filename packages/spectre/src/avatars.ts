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

export type AvatarParameter =
  | AvatarOptions['size']
  | 'presence'
  | typeof PRESENCES[number]
  | AvatarOptions

export const avatar = define((options: AvatarParameter = {}, node?: Element) => {
  if (isString(options)) {
    updateDatasetKey(node, 'initial')

    return [
      (AVATAR_SIZES as readonly string[]).includes(options) && 'avatar',
      (PRESENCES as readonly string[]).includes(options) && 'avatar-presence',
      withPrefix('avatar-', options),
    ]
  }

  updateDatasetKey(node, 'initial', options.initial)

  return ['avatar', withPrefix('avatar-', options.size)]
}, {
  icon: define(stable('avatar-icon')),
  presence: define((status?: typeof PRESENCES[number]) => [
    'avatar-presence',
    status,
  ], classNamesToVariants(PRESENCES)),
})
