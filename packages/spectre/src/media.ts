import { define, defineWithClassNames, isString, stable, withPrefix } from './internal'

const IMG_FITS = ['cover', 'contain'] as const

export interface ImgOptions {
  responsive?: boolean
  fit?: typeof IMG_FITS[number]
}

export const img = define((options: 'responsive' | ImgOptions = {}) =>
  isString(options)
    ? withPrefix('img-', options)
    : [options.responsive && 'img-responsive', withPrefix('img-fit-', options.fit)], {
  responsive: define(stable('img-responsive')),
  fit: defineWithClassNames('img-fit-', IMG_FITS),
})

const mapVideoRatio = (className: string | undefined): string | undefined =>
  className && 'video-responsive-' + className.replace(/:|_/, '-')

export interface VideoOptions {
  responsive?: boolean
  ratio?: '4:3' | '1:1' | '4-3' | '1-1' | '4_3' | '1_1'
}

export const video = define((options: 'responsive' | VideoOptions = {}) =>
  isString(options)
    ? withPrefix('video-', options)
    : [options.responsive && 'video-responsive', mapVideoRatio(options.ratio)], {
  responsive: define(mapVideoRatio, {
    '4_3': define(stable('video-responsive video-responsive-4-3')),
    '1_1': define(stable('video-responsive video-responsive-1-1')),
  }),
})

export const figure = define(stable('figure'), {
  caption: define(stable('figure-caption')),
})
