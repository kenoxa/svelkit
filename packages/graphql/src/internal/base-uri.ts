export const baseURI = (): string | URL =>
  // eslint-disable-next-line no-restricted-globals
  (typeof document !== 'undefined' && document.baseURI) || new URL('.', location.href)
