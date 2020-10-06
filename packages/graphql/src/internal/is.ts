export const is = (value: unknown, type: string): boolean => typeof value === type

export const isString = (value: unknown): value is string => is(value, 'string')

// eslint-disable-next-line @typescript-eslint/ban-types
export const isFunction = (value: unknown): value is Function => is(value, 'function')
