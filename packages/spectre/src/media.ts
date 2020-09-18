import type { ClassNameToggler } from './internal'
import { define, defineWithClassNames, stable, forEach } from './internal'

const IMG_FITS = ['cover', 'contain'] as const

export interface ImgOptions {
  responsive?: boolean
  fit?: typeof IMG_FITS[number]
}

export const img = define((toggle: ClassNameToggler, options?: ImgOptions) => {
  toggle('img-responsive', options?.responsive)
  forEach(IMG_FITS, options?.fit, 'img-fit-', toggle)
}, {
  responsive: define(stable('img-responsive')),
  fit: defineWithClassNames('img-fit-', IMG_FITS),
})

const VIDEO_RATIOS = ['4:3', '1:1', '4-3', '1-1', '4_3', '1_1'] as const
const mapVideoRatio = (className: string): string =>
  'video-responsive-' + className.replace(/:|_/, '-')

export interface VideoOptions {
  responsive?: boolean
  ratio?: typeof VIDEO_RATIOS[number]
}

export const video = define((toggle: ClassNameToggler, options?: VideoOptions) => {
  toggle('video-responsive', options?.responsive)
  forEach(VIDEO_RATIOS, options?.ratio, mapVideoRatio, toggle)
}, {
  responsive: define((toggle: ClassNameToggler, ratio?: VideoOptions['ratio']) => {
    forEach(VIDEO_RATIOS, ratio, mapVideoRatio, toggle)
  }, {
    '4_3': define(stable('video-responsive video-responsive-4-3')),
    '1_1': define(stable('video-responsive video-responsive-1-1')),
  }),
})

export const figure = define(stable('figure'), {
  caption: define(stable('figure-caption')),
})
