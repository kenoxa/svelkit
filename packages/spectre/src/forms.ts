import type { ClassNameToggler, ActionVariants } from './internal'
import { define, stable, classNamesToVariants, forEach, SIZES, STATES } from './internal'

const FORM_VARIANTS = ['horizontal', 'inline'] as const

export interface FormOptions {
  variant?: typeof FORM_VARIANTS[number]
}

export interface FormSizeOptions {
  size?: typeof SIZES[number]
}

export interface FormGroupOptions {
  state?: typeof STATES[number]
}

export interface FormFieldOptions {
  size?: typeof SIZES[number]
  state?: typeof STATES[number]
  disabled?: boolean
  inline?: boolean
}

export interface FormInputGroupOptions {
  inline?: boolean
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const formField = <Variants extends ActionVariants | undefined>(
  kind: string,
  variants?: Variants,
) => {
  const sizePrefix = kind === 'select' ? kind + '-' : 'input-'
  const inline = (kind === 'input' ? kind : 'form') + '-inline'

  return define((toggle: ClassNameToggler, options?: FormFieldOptions) => {
    toggle('form-' + kind, true)

    toggle(inline, options?.inline)

    forEach(SIZES, options?.size, sizePrefix, toggle)
    forEach(STATES, options?.state, 'is-', toggle)
    toggle('disabled', options?.disabled)
  }, {
    ...classNamesToVariants(SIZES, `form-${kind} ${sizePrefix}`),
    inline: define(stable(`form-${kind} ${inline}`)),
    ...variants,
  })
}

export const form = define((toggle: ClassNameToggler, options?: FormOptions) => {
  toggle('form', true)

  forEach(FORM_VARIANTS, options?.variant, 'form-', toggle)
}, {
  ...classNamesToVariants(FORM_VARIANTS, 'form form-'),

  group: define((toggle: ClassNameToggler, options?: FormGroupOptions) => {
    toggle('form-group', true)

    forEach(STATES, options?.state, 'has-', toggle)
  }),

  label: define((toggle: ClassNameToggler, options?: FormSizeOptions) => {
    toggle('form-label', true)

    forEach(SIZES, options?.size, 'label-', toggle)
  }, classNamesToVariants(SIZES, 'form-label label-')),

  input: formField('input', {
    hint: define(stable('form-input-hint')),

    group: define((toggle: ClassNameToggler, options?: FormInputGroupOptions) => {
      toggle('input-group', true)
      toggle('input-inline', options?.inline)
    }, {
      inline: define(stable('input-group input-inline')),

      addon: define((toggle: ClassNameToggler, options?: FormSizeOptions) => {
        toggle('input-group-addon', true)

        forEach(SIZES, options?.size, 'addon-', toggle)
      }, classNamesToVariants(SIZES, 'input-group-addon addon-')),

      btn: define(stable('input-group-btn')),
    }),
  }),

  select: formField('select'),
  checkbox: formField('checkbox'),
  radio: formField('radio'),
  switch: formField('switch'),

  icon: define(stable('form-icon')),
})

const LEFT_RIGHT = ['left', 'right'] as const

export const has = define((toggle: ClassNameToggler, state?: typeof STATES[number]) => {
  forEach(STATES, state, 'has-', toggle)
}, {
  ...classNamesToVariants(STATES, 'has-'),

  icon: define((toggle: ClassNameToggler, position?: typeof LEFT_RIGHT[number]) => {
    forEach(LEFT_RIGHT, position, 'has-icon-', toggle)
  }, classNamesToVariants(LEFT_RIGHT, 'has-icon-')),
})

export const is = define((toggle: ClassNameToggler, state?: typeof STATES[number]) => {
  forEach(STATES, state, 'is-', toggle)
}, classNamesToVariants(STATES, 'is-'))
