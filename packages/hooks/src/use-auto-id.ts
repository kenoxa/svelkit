/**
 * Generate a unique id.
 */
const generateUid = (): string => Math.random().toString(36).slice(2)

/**
 * Remove all whitespace characters.
 */
const safe = (chars: string): string => chars.replace(/\s+/g, '_')

/**
 * Autogenerate IDs to facilitate WAI-ARIA and server rendering.
 *
 * A string can be supplied as an argument to be autoId in lieu of the auto-generated ID.
 * This is handy for accepting user-provided IDs that need to be deterministic.
 *
 * ```html
 * <script>
 *   import { useAutoId } from '@sveltik/hooks'
 *
 *   const autoId = useAutoId('my-component')
 * </script>
 *
 * <label for={autoId('name')}>
 * <input id={autoId('name')}>
 *
 * <label for={autoId('email')}>
 * <input id={autoId('email')}>
 * ```
 *
 * Some background:
 *   1. Accessibiliy APIs rely heavily on element IDs
 *   2. Requiring developers to put IDs on every element in is both
 *      cumbersome and error-prone
 *   3. With a component model, we can generate IDs for them!
 *
 * **HTML5**: The value must be unique amongst all the IDs in the element's home subtree
 * and must contain at least one character. The value must not contain any space characters.
 */
export function useAutoId(base = ''): (name: string, ...args: unknown[]) => string {
  const uid = generateUid()
  const prefix = base && `~${safe(base)}`
  const used = new Map<string, string>()

  return (...args: unknown[]) => {
    const key = args.join('~')

    let id = used.get(key)

    if (!id) {
      used.set(key, (id = `${prefix}~${safe(key)}~${uid}`))
    }

    return id
  }
}
