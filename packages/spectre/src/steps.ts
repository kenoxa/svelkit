import { define, isString, stable } from './internal'

const STATES = ['active'] as const

export interface StepItemOptions {
  state?: typeof STATES[number]
}

export const step = define(stable('step'), {
  item: define((options: string | StepItemOptions = {}) => {
    return ['step-item', isString(options) ? options : options.state]
  }),
})
