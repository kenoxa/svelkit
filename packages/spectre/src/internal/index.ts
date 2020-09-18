import clsx from 'clsx'

import type { Action, ActionResult, ClassValue } from '../types'

import classNames from '../styles/spectre.module.scss'

export const SIZES = ['sm', 'lg'] as const
export const STATES = ['success', 'error'] as const
export const PRESENCES = ['online', 'busy', 'away'] as const

const is = (value: unknown, type: string): boolean => typeof value === type

export const isString = (value: unknown): value is string => is(value, 'string')
export const isNumber = (value: unknown): value is number => is(value, 'number')
export const isBoolean = (value: unknown): value is boolean => is(value, 'boolean')

const withoutPrefix = new Set([...PRESENCES, 'active', 'disabled', 'loading', 'divider'])

const mapClassName = (key: string, mapper?: string | ((className: string) => string)): string => {
  if (isString(mapper)) {
    return withoutPrefix.has(key) ? key : mapper + key
  }

  return mapper?.(key) || key
}

export const forEach = <T extends readonly string[]>(
  keys: T,
  option: T[number] | undefined,
  mapper: string | ((className: string) => string),
  toggle: (className: string, force: boolean) => void,
): void => {
  keys.forEach((key) => toggle(mapClassName(key, mapper), option === key))
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

export type ClassNameToggler = (className: string, force?: unknown) => void

export interface ClassNameMapper<Options> {
  (toggle: ClassNameToggler, options?: Options): void
  (toggle: ClassNameToggler, options: Options | undefined, node: Element): void
}

const asClassName = (className: string): string => classNames[className] || className

const updateWith = <Options>(
  node: Element,
  map: ClassNameMapper<Options>,
): ((options?: Options) => void) => {
  const toggle: ClassNameToggler = (className, force) =>
    node.classList.toggle(asClassName(className), Boolean(force))

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
    let result = ''

    map((className, force) => {
      if (force) {
        result && (result += ' ')
        result += asClassName(className)
      }
    }, options)

    return result
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

export const stable = (...classNames: string[]): ClassNameMapper<boolean> => (
  toggle: ClassNameToggler,
  enable?: boolean,
): void => classNames.forEach((className) => toggle(className, enable !== false))

const uniq = (value: unknown, index: number, array: unknown[]): value is string =>
  value && array.indexOf(value) === index

export const toClassNames = (
  classValue: undefined | ClassValue,
  mapper?: string | ((className: string) => string),
): string[] => {
  let classNames = clsx(...(Array.isArray(classValue) ? classValue : [classValue])).split(/\s+/g)

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
  classList: Element['classList'],
  previousClassNames: string[],
  nextClassNames?: ClassValue,
  mapper?: string | ((className: string) => string),
): string[] => {
  const newClassNames = toClassNames(nextClassNames, mapper)

  classList.add(...newClassNames)
  classList.remove(...previousClassNames.filter((className) => !newClassNames.includes(className)))

  return newClassNames
}

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
  (Object.assign(
    ({ classList }: Element, value?: ClassValue): ActionResult<ClassValue> => {
      let previousClassNames: string[] = toggleClassNames(classList, [], value, mapper)

      return {
        update(value?: ClassValue): void {
          previousClassNames = toggleClassNames(classList, previousClassNames, value, mapper)
        },
      }
    },
    { clsx: (...classNames: ClassValue[]): string => toClassNames(classNames, mapper).join(' ') },
    variants && classNamesToVariants(variants, mapper),
  ) as unknown) as ActionWithVariants<ClassValue, StableVariants<VariantKeys>>
