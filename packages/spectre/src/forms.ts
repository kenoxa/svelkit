import type { ActionVariants } from './internal'
import { define, stable, classNamesToVariants, withPrefix, SIZES, FORM_STATES } from './internal'

const FORM_VARIANTS = ['horizontal', 'inline'] as const

export interface FormOptions {
  variant?: typeof FORM_VARIANTS[number]
}

export interface FormSizeOptions {
  size?: typeof SIZES[number]
}

export interface FormGroupOptions {
  state?: typeof FORM_STATES[number]
}

export interface FormFieldOptions {
  size?: typeof SIZES[number]
  state?: typeof FORM_STATES[number]
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
  const inlineClass = (kind === 'input' ? kind : 'form') + '-inline'

  return define(({ inline, disabled, size, state }: FormFieldOptions = {}) => [
    'form-' + kind,
    { [inlineClass]: inline, disabled },
    withPrefix(sizePrefix, size),
    withPrefix('is-', state),
  ], {
    ...classNamesToVariants(SIZES, `form-${kind} ${sizePrefix}`),
    inline: define(stable(`form-${kind}`, inlineClass)),
    ...variants,
  })
}

const hint = define(stable('form-input-hint'))

export const input = formField('input', {
  hint,
  group: define(({ inline }: FormInputGroupOptions = {}) => [
    'input-group',
    inline && 'input-inline',
  ]),
  groupInline: define(stable('input-group input-inline')),
  inline: define(stable('input-inline')),

  groupAddon: define(({ size }: FormSizeOptions = {}) => [
    'input-group-addon',
    withPrefix('addon-', size),
  ], classNamesToVariants(SIZES, 'input-group-addon addon-')),
  groupBtn: define(stable('input-group-btn')),
})

export const form = define(({ variant }: FormOptions = {}) => [
  'form',
  withPrefix('form-', variant),
], {
  ...classNamesToVariants(FORM_VARIANTS, 'form form-'),

  group: define(({ state }: FormGroupOptions = {}) => ['form-group', withPrefix('has-', state)]),

  label: define(({ size }: FormSizeOptions = {}) => [
    'form-label',
    withPrefix('label-', size),
  ], classNamesToVariants(SIZES, 'form-label label-')),
  input,
  hint,
  select: formField('select'),
  checkbox: formField('checkbox'),
  radio: formField('radio'),
  switch: formField('switch'),

  icon: define(stable('form-icon')),
})

const LEFT_RIGHT = ['left', 'right'] as const

export const has = define((state?: typeof FORM_STATES[number]) => withPrefix('has-', state), {
  ...classNamesToVariants(FORM_STATES, 'has-'),

  icon: define((position?: typeof LEFT_RIGHT[number]) =>
    withPrefix('has-icon-', position), classNamesToVariants(LEFT_RIGHT, 'has-icon-')),
})

export const is = define((state?: typeof FORM_STATES[number]) =>
  withPrefix('is-', state), classNamesToVariants(FORM_STATES, 'is-'))
