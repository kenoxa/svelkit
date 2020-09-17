import type { Action, ActionResult } from '../types'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ActionVariants = Record<string, Action<any>>
export type InferVariants<Variants extends ActionVariants | undefined> = {
  [K in keyof Variants]: Variants[K] extends Action<infer O> ? Action<O> : Variants[K]
}

export type ActionWithVariants<
  Options,
  Variants extends ActionVariants | undefined
> = Variants extends undefined ? Action<Options> : Action<Options> & InferVariants<Variants>

export type ClassNameToggler = (className: string, force?: unknown) => void

export interface ClassNameMapper<Options> {
  (toggle: ClassNameToggler, options?: Options): void
  (toggle: ClassNameToggler, options: Options | undefined, node: Element): void
}

const updateWith = <Options>(
  node: Element,
  map: ClassNameMapper<Options>,
): ((options?: Options) => void) => {
  const toggle: ClassNameToggler = (className, force) =>
    node.classList.toggle(className, Boolean(force))

  return (options) => map(toggle, options, node)
}

export const define = <
  Options = undefined,
  Variants extends ActionVariants | undefined = undefined
>(
  map: ClassNameMapper<Options>,
  variants?: Variants,
): ActionWithVariants<Options, Variants> => {
  const clsx = (options?: Options): string => {
    let classNames = ''

    map((className, force) => {
      if (force) {
        classNames && (classNames += ' ')
        classNames += className
      }
    }, options)

    return classNames
  }

  return (Object.assign(
    (node: Element, options?: Options): ActionResult<Options> => {
      const update = updateWith(node, map)

      update(options)

      return { update }
    },
    { clsx, class: clsx() },
    variants,
  ) as unknown) as ActionWithVariants<Options, Variants>
}

export const stable = (...classNames: string[]): ClassNameMapper<undefined> => (
  toggle: ClassNameToggler,
): void => classNames.forEach((className) => toggle(className, true))
