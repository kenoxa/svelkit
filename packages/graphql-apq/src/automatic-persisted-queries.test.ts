/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { GraphQLFetchError } from '@svelkit/graphql'

import { automaticPersistedQueriesExchange } from '.'

test('already persisted query', async () => {
  const query = '{ viewer { name } }'
  const response = { data: { viewer: { name: 'X' } } }
  const next = jest.fn().mockResolvedValueOnce(response)

  const apq = automaticPersistedQueriesExchange()

  const result = await apq(
    {
      operation: {
        id: 1,
        type: 'query',
        name: undefined,
      },
      query,
      variables: {},
      extensions: {},
      options: {
        headers: {},
        signal: expect.any(AbortSignal) as AbortSignal,
        uri: 'http://test.local/graphql',
      },
    },
    next,
    () => {
      throw new Error('no update')
    },
  )

  expect(result).toBe(response)

  expect(next).toHaveBeenCalledTimes(1)

  expect(next.mock.calls[0]).toMatchObject([
    {
      query: '',
      extensions: {
        persistedQuery: {
          version: 1,
          sha256Hash: '3f9a5fe58741fdcb3ba59d8cc865ce0c081b65bca09f7904bc81277be1bdd3f0',
        },
      },
      options: {
        preferGetForQueries: true,
      },
    },
  ])
})

test('persisted query not found', async () => {
  const query = '{ viewer { name } }'
  const response = { data: { viewer: { name: 'X' } } }
  const next = jest
    .fn()
    .mockResolvedValueOnce({ errors: [{ message: 'PersistedQueryNotFound' }] })
    .mockResolvedValue(response)

  const apq = automaticPersistedQueriesExchange()

  const result = await apq(
    {
      operation: {
        id: 1,
        type: 'query',
        name: undefined,
      },
      query,
      variables: {},
      extensions: {},
      options: {
        headers: {},
        signal: expect.any(AbortSignal) as AbortSignal,
        uri: 'http://test.local/graphql',
      },
    },
    next,
    () => {
      throw new Error('no update')
    },
  )

  expect(result).toBe(response)

  expect(next).toHaveBeenCalledTimes(2)

  expect(next.mock.calls[0]).toMatchObject([
    {
      query: '',
      extensions: {
        persistedQuery: {
          version: 1,
          sha256Hash: '3f9a5fe58741fdcb3ba59d8cc865ce0c081b65bca09f7904bc81277be1bdd3f0',
        },
      },
    },
  ])

  expect(next).toHaveBeenLastCalledWith(
    expect.objectContaining({
      query,
      extensions: expect.not.objectContaining({
        persistedQuery: expect.anything(),
      }),
      options: expect.not.objectContaining({
        preferGetForQueries: expect.anything(),
      }),
    }),
  )
})

test('persisted query not found (code: 400)', async () => {
  const query = '{ viewer { name } }'
  const response = { data: { viewer: { name: 'X' } } }
  const next = jest
    .fn()
    .mockRejectedValueOnce(
      new GraphQLFetchError({ status: 400 } as Response, {
        errors: [{ message: 'PersistedQueryNotFound' }],
      }),
    )
    .mockResolvedValue(response)

  const apq = automaticPersistedQueriesExchange()

  const result = await apq(
    {
      operation: {
        id: 1,
        type: 'query',
        name: undefined,
      },
      query,
      variables: {},
      extensions: {},
      options: {
        headers: {},
        signal: expect.any(AbortSignal) as AbortSignal,
        uri: 'http://test.local/graphql',
      },
    },
    next,
    () => {
      throw new Error('no update')
    },
  )

  expect(result).toBe(response)

  expect(next).toHaveBeenCalledTimes(2)

  expect(next.mock.calls[0]).toMatchObject([
    {
      query: '',
      extensions: {
        persistedQuery: {
          version: 1,
          sha256Hash: '3f9a5fe58741fdcb3ba59d8cc865ce0c081b65bca09f7904bc81277be1bdd3f0',
        },
      },
    },
  ])

  expect(next).toHaveBeenLastCalledWith(
    expect.objectContaining({
      query,
      extensions: expect.not.objectContaining({
        persistedQuery: expect.anything(),
      }),
      options: expect.not.objectContaining({
        preferGetForQueries: expect.anything(),
      }),
    }),
  )
})

test('persisted query not supported', async () => {
  const query = '{ viewer { name } }'
  const response = { data: { viewer: { name: 'X' } } }
  const next = jest
    .fn()
    .mockResolvedValueOnce({ errors: [{ message: 'PersistedQueryNotSupported' }] })
    .mockResolvedValue(response)

  const apq = automaticPersistedQueriesExchange()

  const result = await apq(
    {
      operation: {
        id: 1,
        type: 'query',
        name: undefined,
      },
      query,
      variables: {},
      extensions: {},
      options: {
        headers: {},
        signal: expect.any(AbortSignal) as AbortSignal,
        uri: 'http://test.local/graphql',
      },
    },
    next,
    () => {
      throw new Error('no update')
    },
  )

  expect(result).toBe(response)

  expect(next).toHaveBeenCalledTimes(2)

  expect(next.mock.calls[0]).toMatchObject([
    {
      query: '',
      extensions: {
        persistedQuery: {
          version: 1,
          sha256Hash: '3f9a5fe58741fdcb3ba59d8cc865ce0c081b65bca09f7904bc81277be1bdd3f0',
        },
      },
      options: {
        preferGetForQueries: true,
      },
    },
  ])

  expect(next).toHaveBeenLastCalledWith(
    expect.objectContaining({
      query,
      extensions: expect.not.objectContaining({
        persistedQuery: expect.anything(),
      }),
      options: expect.not.objectContaining({
        preferGetForQueries: expect.anything(),
      }),
    }),
  )

  const result2 = await apq(
    {
      operation: {
        id: 1,
        type: 'query',
        name: undefined,
      },
      query,
      variables: {},
      extensions: {},
      options: {
        headers: {},
        signal: expect.any(AbortSignal) as AbortSignal,
        uri: 'http://test.local/graphql',
      },
    },
    next,
    () => {
      throw new Error('no update')
    },
  )

  expect(result2).toBe(response)

  expect(next).toHaveBeenCalledTimes(3)
  expect(next).toHaveBeenLastCalledWith(/* no params */)
})

test('other errors are passed through', async () => {
  const query = '{ viewer { name } }'
  const response = { errors: [{ message: 'Some other error' }] }
  const next = jest.fn().mockResolvedValueOnce(response)

  const apq = automaticPersistedQueriesExchange()

  const result = await apq(
    {
      operation: {
        id: 1,
        type: 'query',
        name: undefined,
      },
      query,
      variables: {},
      extensions: {},
      options: {
        headers: {},
        signal: expect.any(AbortSignal) as AbortSignal,
        uri: 'http://test.local/graphql',
      },
    },
    next,
    () => {
      throw new Error('no update')
    },
  )

  expect(result).toBe(response)

  expect(next).toHaveBeenCalledTimes(1)

  expect(next.mock.calls[0]).toMatchObject([
    {
      query: '',
      extensions: {
        persistedQuery: {
          version: 1,
          sha256Hash: '3f9a5fe58741fdcb3ba59d8cc865ce0c081b65bca09f7904bc81277be1bdd3f0',
        },
      },
      options: {
        preferGetForQueries: true,
      },
    },
  ])
})

test('mutations are passed through', async () => {
  const query = 'mutation Add{ add(a: 1, b: 2): { result: 3 } }'
  const response = { data: { add: { result: 3 } } }
  const next = jest.fn().mockResolvedValueOnce(response)

  const apq = automaticPersistedQueriesExchange()

  const result = await apq(
    {
      operation: {
        id: 1,
        type: 'mutation',
        name: 'Add',
      },
      query,
      variables: {},
      extensions: {},
      options: {
        headers: {},
        signal: expect.any(AbortSignal) as AbortSignal,
        uri: 'http://test.local/graphql',
      },
    },
    next,
    () => {
      throw new Error('no update')
    },
  )

  expect(result).toBe(response)

  expect(next).toHaveBeenCalledTimes(1)
  expect(next).toHaveBeenLastCalledWith(/* no params */)
})
/* eslint-enable @typescript-eslint/no-unsafe-assignment */
