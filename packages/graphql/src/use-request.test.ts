import 'cross-fetch/polyfill'
import fetchMock from 'fetch-mock-jest'

import { render, waitFor } from '@testing-library/svelte'
import Fragment from 'svelte-fragment-component'

import type { GraphQLExecutor } from './types'
import { initGraphQLClient } from './client'
import { minimize } from './internal/minimize'
import { useRequest } from './use-request'

beforeEach(() => {
  fetchMock.mockReset()
})

test('result is promise like', async () => {
  const url = 'http://test.local/graphql'
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

  fetchMock.post(url, { data: { hero: [] } })

  let request: GraphQLExecutor | undefined
  render(Fragment, {
    onCreate() {
      initGraphQLClient({ url })
      request = useRequest(query, variables)
    },
  })

  const result = await request

  expect(result).toMatchObject({
    fetching: false,
    data: { hero: [] },
    error: undefined,
  })

  expect(fetchMock.lastOptions(url)).toMatchObject({
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: minimize(query), variables }),
  })
})

test('result is a readable store', async () => {
  const url = 'http://test.local/graphql'
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

  fetchMock.post(url, { data: { hero: [] } })

  let request: GraphQLExecutor | undefined
  render(Fragment, {
    onCreate() {
      initGraphQLClient({ url })
      request = useRequest(query, variables)
    },
  })

  const update = jest.fn()
  request?.subscribe(update)

  expect(update).toHaveBeenCalledWith({ fetching: true })

  await waitFor(() =>
    expect(update).toHaveBeenCalledWith({ fetching: false, data: { hero: [] }, error: undefined }),
  )

  expect(fetchMock.lastOptions(url)).toMatchObject({
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: minimize(query), variables }),
  })
})

test('result is a function returning a promise like', async () => {
  const url = 'http://test.local/graphql'
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

  fetchMock.post(url, { data: { hero: [] } })

  let request: GraphQLExecutor | undefined
  render(Fragment, {
    onCreate() {
      initGraphQLClient({ url })
      request = useRequest(query, variables)
    },
  })

  const result = await request?.({ episode: 5 })

  expect(result).toMatchObject({
    fetching: false,
    data: { hero: [] },
    error: undefined,
  })

  expect(fetchMock.lastOptions(url)).toMatchObject({
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: minimize(query), variables: { episode: 5 } }),
  })
})

test('result is a function returning an readable store', async () => {
  const url = 'http://test.local/graphql'
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

  fetchMock.post(url, { data: { hero: [] } })

  let request: GraphQLExecutor | undefined
  render(Fragment, {
    onCreate() {
      initGraphQLClient({ url })
      request = useRequest(query, variables)
    },
  })

  const update = jest.fn()
  request?.({ episode: 7 }).subscribe(update)

  expect(update).toHaveBeenCalledWith({ fetching: true })

  await waitFor(() =>
    expect(update).toHaveBeenCalledWith({ fetching: false, data: { hero: [] }, error: undefined }),
  )

  expect(fetchMock.lastOptions(url)).toMatchObject({
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: minimize(query), variables: { episode: 7 } }),
  })
})
