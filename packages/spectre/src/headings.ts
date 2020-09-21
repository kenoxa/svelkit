import { define, classNamesToVariants, withPrefix } from './internal'

export type Heading = 1 | 2 | 3 | 4 | 5 | 6

export const heading = define((type?: Heading) => withPrefix('h', type), classNamesToVariants([
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
]))

// Can not destructure several: rollup-dts: VariableStatement with more than one declaration not yet supported
// export const {h1, h2, h3, h4, h5, h6} = heading
export const { h1 } = heading
export const { h2 } = heading
export const { h3 } = heading
export const { h4 } = heading
export const { h5 } = heading
export const { h6 } = heading
