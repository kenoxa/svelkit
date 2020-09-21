export interface ActionResult<Options> {
  update: (options?: Options) => void
  destroy?: () => void
}

export interface Action<Options> {
  (node: Element, options?: Options): ActionResult<Options>
  (options?: Options): string
}

export type ClassFalsy =
  | ''
  | 0
  | false
  | typeof NaN // eslint-disable-line unicorn/prefer-number-properties
  | null
  | undefined

export type ClassValue = string | ClassFalsy | Record<string, unknown> | ClassValue[]
