// Based on _hash128_1a from https://github.com/tjwebb/fnv-plus/blob/master/index.js

// Lookup table for hex codes
const hl = Array.from(
  { length: 256 },
  (_, i) => ((i >> 4) & 15).toString(16) + (i & 15).toString(16),
)

const toHex = (n: number): string => hl[n >> 8] + hl[n & 255]

const M = 65535
const R = 315

export const fnv1a128 = (string: string): string => {
  let i = string.length
  let t0 = 0
  let t1 = 0
  let t2 = 0
  let t3 = 0
  let t4 = 0
  let t5 = 0
  let t6 = 0
  let t7 = 0
  let v0 = 5247
  let v1 = 20042
  let v2 = 11120
  let v3 = 30865
  let v4 = 36015
  let v5 = 4122
  let v6 = 52073
  let v7 = 53800

  while (i--) {
    v0 ^= string.charCodeAt(i)
    t0 = v0 * R
    t1 = v1 * R
    t2 = v2 * R
    t3 = v3 * R
    t4 = v4 * R
    t5 = v5 * R
    t6 = v6 * R
    t7 = v7 * R
    t5 += v0 << 8
    t6 += v1 << 8
    t7 += v2 << 8
    t1 += t0 >>> 16
    v0 = t0 & M
    t2 += t1 >>> 16
    v1 = t1 & M
    t3 += t2 >>> 16
    v2 = t2 & M
    t4 += t3 >>> 16
    v3 = t3 & M
    t5 += t4 >>> 16
    v4 = t4 & M
    t6 += t5 >>> 16
    v5 = t5 & M
    v7 = (t7 + (t6 >>> 16)) & M
    v6 = t6 & M
  }

  return (
    toHex(v7) + toHex(v6) + toHex(v5) + toHex(v4) + toHex(v3) + toHex(v2) + toHex(v1) + toHex(v0)
  )
}
