import clsx from 'clsx'

import type { Action, ActionResult, ClassValue } from '../types'

import classNames from '../styles/spectre.module.scss'

export const SIZES = ['sm', 'lg'] as const
export const SHAPES = ['circle'] as const
export const STATES = ['active', 'loading', 'disabled'] as const
export const FORM_STATES = ['success', 'error'] as const
export const PRESENCES = ['online', 'busy', 'away'] as const

const is = (value: unknown, type: string): boolean => typeof value === type

export const isString = (value: unknown): value is string => is(value, 'string')
export const isNumber = (value: unknown): value is number => is(value, 'number')
export const isBoolean = (value: unknown): value is boolean => is(value, 'boolean')

export const ensureButtonType = (node?: Element): void => {
  if (node) {
    if (node.tagName === 'BUTTON') {
      if (!node.hasAttribute('type')) {
        ;(node as HTMLButtonElement).type = 'button'
      }
    } else {
      node.setAttribute('role', 'button')
    }
  }
}

export const updateAttribute = (node: Element | undefined, key: string, value?: unknown): void => {
  if (node) {
    // eslint-disable-next-line no-eq-null, eqeqeq
    if (value == null) {
      node.removeAttribute(key)
    } else {
      node.setAttribute(key, String(value))
    }
  }
}

export const updateDatasetKey = (node: Element | undefined, key: string, value?: unknown): void =>
  updateAttribute(node, 'data-' + key, value)

const CLASS_NAMES_WITHOUT_PREFIX = new Set([...PRESENCES, ...STATES, 'divider'])

const mapClassName = (key: string, mapper?: string | ((className: string) => string)): string => {
  if (isString(mapper)) {
    return CLASS_NAMES_WITHOUT_PREFIX.has(key) ? key : mapper + key
  }

  return mapper?.(key) || key
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ActionVariants = Record<string, Action<any>>
export type InferVariants<Variants extends ActionVariants | undefined> = {
  [K in keyof Variants]: Variants[K] extends Action<infer O> ? Action<O> : Variants[K]
}

export type ActionWithVariants<
  Options,
  Variants extends ActionVariants | undefined
> = Variants extends undefined ? Action<Options> : Action<Options> & InferVariants<Variants>

export interface ClassNameMapper<Options> {
  (options?: Options): ClassValue
  (options: Options | undefined, node: Element): ClassValue
}

const asClassName = (className: string): string => classNames[className] || className

const uniq = (value: unknown, index: number, array: unknown[]): value is string =>
  value && array.indexOf(value) === index

const clsxArray = (classValue: ClassValue): string[] => clsx(classValue).split(/\s+/g).filter(uniq)

export const withPrefix = (prefix: string, ...values: ClassValue[]): string[] =>
  clsxArray(values).map((value) => mapClassName(value, prefix))

export const toClassNames = (
  classValue: undefined | ClassValue,
  mapper?: string | ((className: string) => string),
): string[] => {
  let classNames = clsxArray(classValue)

  if (mapper) classNames = classNames.map((key) => mapClassName(key, mapper))

  classNames.forEach((className) => {
    if (className === 'col' || className.startsWith('col-')) {
      classNames.push('column')
    } else if (className === 'row' || className === 'cols') {
      classNames.push('columns')
    }
  })

  return classNames.map(asClassName).filter(uniq)
}

export const toggleClassNames = (
  { classList }: Element,
  nextClassNames?: ClassValue,
  previousClassNames?: string[],
  mapper?: string | ((className: string) => string),
): string[] => {
  const newClassNames = toClassNames(nextClassNames, mapper)

  classList.add(...newClassNames)
  previousClassNames &&
    classList.remove(
      ...previousClassNames.filter((className) => !newClassNames.includes(className)),
    )

  return newClassNames
}

const actionFrom = <T, Variants extends ActionVariants | undefined = undefined>(
  update: (value: T | undefined, node?: Element, previousClassNames?: string[]) => string[],
  variants?: Variants,
): ActionWithVariants<T, Variants> =>
  (Object.assign((nodeOrOptions?: Element | T, initial?: T): ActionResult<T> | string => {
    if (nodeOrOptions instanceof Element) {
      let previousClassNames = update(initial, nodeOrOptions)

      return {
        update(value?: T): void {
          previousClassNames = update(value, nodeOrOptions, previousClassNames)
        },
      }
    }

    return update(nodeOrOptions).join(' ')
  }, variants) as unknown) as ActionWithVariants<T, Variants>

export const define = <
  Options = undefined,
  Variants extends ActionVariants | undefined = undefined
>(
  map: ClassNameMapper<Options>,
  variants?: Variants,
): ActionWithVariants<Options, Variants> =>
  actionFrom(
    (options, node, previousClassNames) =>
      node
        ? toggleClassNames(node, map(options, node), previousClassNames)
        : toClassNames(map(options)),
    variants,
  )

export const stable = (...classNames: string[]): ClassNameMapper<boolean> => (
  enable?: boolean,
): ClassValue => enable !== false && classNames

export type StableVariants<VariantKeys extends readonly string[]> = Record<
  VariantKeys[number],
  Action<boolean>
>

export const classNamesToVariants = <Keys extends readonly string[]>(
  keys: Keys,
  mapper?: string | ((className: string) => string),
): StableVariants<Keys> =>
  // eslint-disable-next-line unicorn/no-reduce
  keys.reduce((variants, key) => {
    variants[key] = define(stable(mapClassName(key, mapper)))
    return variants
  }, {} as ActionVariants)

export const defineWithClassNames = <VariantKeys extends readonly string[]>(
  mapper?: string | ((className: string) => string),
  variants?: VariantKeys,
): Action<VariantKeys[number]> & ActionWithVariants<ClassValue, StableVariants<VariantKeys>> =>
  (actionFrom(
    (classNames: ClassValue, node, previousClassNames) =>
      node
        ? toggleClassNames(node, classNames, previousClassNames, mapper)
        : toClassNames(classNames, mapper),
    variants && classNamesToVariants(variants, mapper),
  ) as unknown) as Action<VariantKeys[number]> &
    ActionWithVariants<ClassValue, StableVariants<VariantKeys>>
