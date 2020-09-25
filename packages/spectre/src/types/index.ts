export interface ActionResult<Options> {
  update: (options?: Options) => void
  destroy?: () => void
}

export interface Action<Options> {
  (options?: Options): string
  (node: Element, options?: Options): ActionResult<Options>
}

export type ClassFalsy =
  | ''
  | 0
  | false
  | typeof NaN // eslint-disable-line unicorn/prefer-number-properties
  | null
  | undefined

export type ClassValue = string | ClassFalsy | Record<string, unknown> | ClassValue[]
