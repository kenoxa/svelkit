import clsx from 'clsx'

import classNames from './styles/spectre.module.scss'

export type ClassValue =
  | string
  | number
  | null
  | boolean
  | undefined
  | Record<string, unknown>
  | ClassValue[]

const asClassName = (className: string): string | undefined => classNames[className]

const uniq = (value: unknown, index: number, array: unknown[]): value is string => value && array.indexOf(value) === index

const toClassNames = (classValue?: ClassValue): string[] => {
  const classNames = clsx(...(Array.isArray(classValue) ? classValue : [classValue])).split(/\s+/g)

  classNames.forEach((className) => {
    if (className === 'col' || className.startsWith('col-')) {
      classNames.push('column')
    } else if (className === 'row' || className === 'cols') {
      classNames.push('columns')
    }
  })

  return classNames.map(asClassName).filter(uniq)
}

const toggle = (
  classList: Element['classList'],
  previousClassNames: string[],
  nextClassNames?: ClassValue,
): string[] => {
  const newClassNames = toClassNames(nextClassNames)

  classList.add(...newClassNames)
  classList.remove(...previousClassNames.filter((className) => !newClassNames.includes(className)))

  return newClassNames
}

export function spectre(
  { classList }: Element,
  classNames?: ClassValue,
): { update: (classNames?: ClassValue) => void } {
  let previousClassNames: string[] = toggle(classList, [], classNames)

  return {
    update(classNames?: ClassValue): void {
      previousClassNames = toggle(classList, previousClassNames, classNames)
    },
  }
}

spectre.clsx = (...classNames: ClassValue[]): string => toClassNames(classNames).join(' ')
