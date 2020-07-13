import { fnv1a128 } from './fnv1a'

test('generate a 128-bit hash', () => {
  expect(fnv1a128('hello world')).toBe('c792ae0d575183ae3ab0de50518d92d5')
  expect(fnv1a128('the quick brown fox jumps over the lazy dog')).toBe(
    'c6fd1e31b450b792936b5094532dc2ce',
  )
})
