import fetchMock from 'fetch-mock-jest'

import { render, waitFor } from '@testing-library/svelte'
import Fragment from 'svelte-fragment-component'

import type { GraphQLExecutor } from '.'
import {
  createGraphQLClient,
  initGraphQLClient,
  useGraphQL,
  useOperations,
  createRequest,
  withGuard,
  withDebounce,
} from '.'

jest.useFakeTimers()

beforeEach(() => {
  fetchMock.mockReset()
})

test('result is promise like', async () => {
  const uri = 'http://test.local/graphql'
  const query = `query {
    hero(episode: $episode) {
      name
      heroFriends: friends {
        id
        name
      }
    }
  }`
  const variables = { episode: 10 }

  fetchMock.post(uri, { data: { hero: [] } })

  let request: GraphQLExecutor | undefined
  render(Fragment, {
    onCreate() {
      initGraphQLClient({ uri })
      request = useGraphQL(query, variables)
    },
  })

  const result = await request

  expect(result).toMatchObject({
    fetching: false,
    data: { hero: [] },
    error: undefined,
  })

  expect(fetchMock.lastOptions(uri)).toMatchObject({
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ query, variables }),
  })
})

test('result is a readable store', async () => {
  const uri = 'http://test.local/graphql'
  const query = `query fetchHeros {
    hero(episode: $episode) {
      name
      heroFriends: friends {
        id
        name
      }
    }
  }`
  const variables = { episode: 10 }

  fetchMock.post(uri, { data: { hero: [] } })

  let request: GraphQLExecutor | undefined
  render(Fragment, {
    onCreate() {
      initGraphQLClient({ uri })
      request = useGraphQL(query, variables)
    },
  })

  const update = jest.fn()
  request?.subscribe(update)

  expect(update).toHaveBeenCalledWith(
    expect.objectContaining({
      query,
      variables,
      options: {},
      operation: { id: 1, type: 'query', name: 'fetchHeros' },
      fetching: true,
      data: undefined,
      error: undefined,
      extensions: undefined,
    }),
  )

  await waitFor(() =>
    expect(update).toHaveBeenCalledWith(
      expect.objectContaining({
        query,
        variables,
        options: {},
        operation: { id: 1, type: 'query', name: 'fetchHeros' },
        fetching: false,
        data: { hero: [] },
        error: undefined,
        extensions: undefined,
      }),
    ),
  )

  expect(fetchMock.lastOptions(uri)).toMatchObject({
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ operationName: 'fetchHeros', query, variables }),
  })
})

test('result is a function returning a promise like', async () => {
  const uri = 'http://test.local/graphql'
  const query = `query {
    hero(episode: $episode) {
      name
      heroFriends: friends {
        id
        name
      }
    }
  }`
  const variables = { episode: 10 }

  fetchMock.post(uri, { data: { hero: [] } })

  let request: GraphQLExecutor | undefined
  render(Fragment, {
    onCreate() {
      initGraphQLClient({ uri })
      request = useGraphQL(query, variables)
    },
  })

  const result = await request?.({ episode: 5 })

  expect(result).toMatchObject({
    fetching: false,
    data: { hero: [] },
    error: undefined,
  })

  expect(fetchMock.lastOptions(uri)).toMatchObject({
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ query, variables: { episode: 5 } }),
  })
})

test('result is a function returning an readable store', async () => {
  const uri = 'http://test.local/graphql'
  const query = `query {
    hero(episode: $episode) {
      name
      heroFriends: friends {
        id
        name
      }
    }
  }`
  const variables = { episode: 10 }

  fetchMock.post(uri, { data: { hero: [] } })

  let request: GraphQLExecutor | undefined
  render(Fragment, {
    onCreate() {
      initGraphQLClient({ uri })
      request = useGraphQL(query, variables)
    },
  })

  const update = jest.fn()
  request?.({ episode: 7 }).subscribe(update)

  expect(update).toHaveBeenCalledWith({
    query,
    variables: { episode: 7 },
    options: {},
    operation: { id: 1, type: 'query', name: undefined },
    fetching: true,
    data: undefined,
    error: undefined,
    extensions: undefined,
  })

  await waitFor(() =>
    expect(update).toHaveBeenCalledWith({
      query,
      variables: { episode: 7 },
      options: {},
      operation: { id: 1, type: 'query', name: undefined },
      fetching: false,
      data: { hero: [] },
      error: undefined,
      extensions: undefined,
    }),
  )

  expect(fetchMock.lastOptions(uri)).toMatchObject({
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ query, variables: { episode: 7 } }),
  })
})

test('request with guard and debounce', () => {
  const uri = 'http://test.local/graphql'
  const query = `query fetchHeros {
    hero(episode: $episode) {
      name
      heroFriends: friends {
        id
        name
      }
    }
  }`
  const variables = { episode: 5 }

  fetchMock.post(uri, { data: { hero: [] } })

  const request = useOperations(createGraphQLClient({ uri })).request(query, variables, {
    intercept: [withGuard(({ episode }) => episode > 5), withDebounce(100)],
  })

  const update = jest.fn()
  request.subscribe(update)

  // The initial data
  expect(update).toHaveBeenCalledWith({
    query,
    variables: { episode: 5 },
    options: {},
    operation: undefined,
    fetching: false,
    data: undefined,
    error: undefined,
    extensions: undefined,
  })
  expect(fetchMock).not.toHaveBeenCalled()
  update.mockReset()

  // The guard (episode > 5) is still in play
  jest.advanceTimersByTime(150)
  expect(update).not.toHaveBeenCalled()
  expect(fetchMock).not.toHaveBeenCalled()

  // Pass the guard (episode > 5)
  request.variables = { episode: 6 }
  expect(request.variables).toMatchObject({ episode: 6 })
  jest.advanceTimersByTime(50)

  // The debounce (100) is still in play
  expect(update).not.toHaveBeenCalled()
  expect(fetchMock).not.toHaveBeenCalled()

  request.variables = { episode: 7 }
  expect(request.variables).toMatchObject({ episode: 7 })
  jest.advanceTimersByTime(50)
  expect(update).not.toHaveBeenCalled()

  // The debounce (100) has passed
  jest.advanceTimersByTime(50)
  expect(update).toHaveBeenCalledWith({
    query,
    variables: { episode: 7 },
    options: {},
    operation: { id: 1, type: 'query', name: 'fetchHeros' },
    fetching: true,
    data: undefined,
    error: undefined,
    extensions: undefined,
  })

  expect(fetchMock.lastOptions(uri)).toMatchObject({
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      operationName: 'fetchHeros',
      query,
      variables: { episode: 7 },
    }),
  })
})

test('no fetch until subscriber', async () => {
  const uri = 'http://localhost/graphql'
  const query = `query fetchHeros {
    hero(episode: $episode) {
      name
      heroFriends: friends {
        id
        name
      }
    }
  }`
  const variables = { episode: 5 }

  fetchMock.post(uri, { data: { hero: [] } })

  const request = createRequest(createGraphQLClient(), query, variables)

  jest.runAllTimers()

  expect(fetchMock).not.toHaveBeenCalled()

  const update = jest.fn()
  request.subscribe(update)

  expect(update).toHaveBeenCalledWith({
    query,
    variables: { episode: 5 },
    options: {},
    operation: { id: 1, type: 'query', name: 'fetchHeros' },
    fetching: true,
    data: undefined,
    error: undefined,
    extensions: undefined,
  })

  await waitFor(() =>
    expect(update).toHaveBeenCalledWith({
      query,
      variables: { episode: 5 },
      options: {},
      operation: { id: 1, type: 'query', name: 'fetchHeros' },
      fetching: false,
      data: { hero: [] },
      error: undefined,
      extensions: undefined,
    }),
  )

  expect(fetchMock.lastOptions(uri)).toMatchObject({
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      operationName: 'fetchHeros',
      query,
      variables: { episode: 5 },
    }),
  })
})
