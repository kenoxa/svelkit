import type { ClassNameToggler } from './internal'
import { define, stable } from './internal'

import classNames from './styles/spectre.module.scss'

export type Heading = 1 | 2 | 3 | 4 | 5 | 6

export const heading = define((toggle: ClassNameToggler, type?: Heading) => {
  toggle(classNames.h1, type === 1)
  toggle(classNames.h2, type === 2)
  toggle(classNames.h3, type === 3)
  toggle(classNames.h4, type === 4)
  toggle(classNames.h5, type === 5)
  toggle(classNames.h6, type === 6)
}, {
  h1: define(stable(classNames.h1)),
  h2: define(stable(classNames.h2)),
  h3: define(stable(classNames.h3)),
  h4: define(stable(classNames.h4)),
  h5: define(stable(classNames.h5)),
  h6: define(stable(classNames.h6)),
})

// Can not destructure several: rollup-dts: VariableStatement with more than one declaration not yet supported
// export const {h1, h2, h3, h4, h5, h6} = heading
export const { h1 } = heading
export const { h2 } = heading
export const { h3 } = heading
export const { h4 } = heading
export const { h5 } = heading
export const { h6 } = heading
