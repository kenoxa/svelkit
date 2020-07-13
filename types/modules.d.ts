declare module 'fetch-mock-jest' {
  import { FetchMockStatic, MockCall, FetchMockSandbox } from 'fetch-mock'

  interface FetchMockJestSandbox {
    sandbox(): jest.MockInstance<Response, MockCall> & FetchMockSandbox
  }

  export type FetchMockJest = jest.MockInstance<Response, MockCall> &
    FetchMockJestSandbox &
    FetchMockStatic

  const fetchMockJest: FetchMockJest

  export default fetchMockJest
}
