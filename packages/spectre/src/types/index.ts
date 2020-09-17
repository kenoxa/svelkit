export interface ActionResult<Options> {
  update?: (options?: Options) => void
  destroy?: () => void
}

export interface Action<Options> {
  (node: Element, options?: Options): ActionResult<Options> | void
  clsx: (options?: Options) => string
  class: string
}

export type ClassValue =
  | string
  | number
  | null
  | boolean
  | undefined
  | Record<string, unknown>
  | ClassValue[]
