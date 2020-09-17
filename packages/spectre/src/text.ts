import { define, stable } from './internal'

import classNames from './styles/spectre.module.scss'

export const text = {
  left: define(stable(classNames['text-left'])),
  right: define(stable(classNames['text-right'])),
  center: define(stable(classNames['text-center'])),
  justify: define(stable(classNames['text-justify'])),
  lowercase: define(stable(classNames['text-lowercase'])),
  uppercase: define(stable(classNames['text-uppercase'])),
  capitalize: define(stable(classNames['text-capitalize'])),
  normal: define(stable(classNames['text-normal'])),
  bold: define(stable(classNames['text-bold'])),
  italic: define(stable(classNames['text-italic'])),
  large: define(stable(classNames['text-large'])),
  small: define(stable(classNames['text-small'])),
  tiny: define(stable(classNames['text-tiny'])),
  muted: define(stable(classNames['text-muted'])),
  ellipsis: define(stable(classNames['text-ellipsis'])),
  clip: define(stable(classNames['text-clip'])),
  break: define(stable(classNames['text-break'])),
}
