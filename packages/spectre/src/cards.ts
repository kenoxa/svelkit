import type { ClassNameToggler } from './internal'
import { define, stable } from './internal'

import classNames from './styles/spectre.module.scss'

export interface CardOptions {
  shadow?: boolean
}

export const card = define((toggle: ClassNameToggler, options?: CardOptions) => {
  toggle(classNames.card, true)
  toggle(classNames['card-shadow'], options?.shadow)
}, {
  shadow: define(stable(classNames.card, classNames['card-shadow'])),
  image: define(stable(classNames['card-image'])),
  header: define(stable(classNames['card-header'])),
  body: define(stable(classNames['card-body'])),
  footer: define(stable(classNames['card-footer'])),
})
