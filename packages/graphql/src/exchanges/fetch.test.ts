import 'cross-fetch/polyfill'
import fetchMock from 'fetch-mock-jest'
import { fetch as fetchExchange } from './fetch'

beforeEach(() => {
  fetchMock.mockReset()
})

test('basic query', async () => {
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

  const fetch = fetchExchange({ uri })

  const result = await fetch(
    {
      operation: {
        id: 1,
        type: 'query',
        name: undefined,
      },
      query,
      variables,
      extensions: {},
      options: {
        headers: {},
        signal: new AbortController().signal,
      },
    },
    () => {
      throw new Error('no next')
    },
    () => {
      throw new Error('no update')
    },
  )

  expect(result).toMatchObject({
    data: { hero: [] },
  })

  expect(fetchMock.lastOptions(uri)).toMatchObject({
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ query, variables }),
  })
})

test('prefer get for queries', async () => {
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

  const url = new URL('/graphql', document.baseURI)
  url.searchParams.set('query', query)
  url.searchParams.set('variables', JSON.stringify(variables))

  fetchMock.get(url.href, { data: { hero: [] } })

  const fetch = fetchExchange({ preferGetForQueries: true })

  const result = await fetch(
    {
      operation: {
        id: 1,
        type: 'query',
        name: undefined,
      },
      query,
      variables,
      extensions: {},
      options: {
        headers: {},
        signal: new AbortController().signal,
      },
    },
    () => {
      throw new Error('no next')
    },
    () => {
      throw new Error('no update')
    },
  )

  expect(result).toMatchObject({
    data: { hero: [] },
  })

  expect(fetchMock.lastOptions(url.href)).toMatchObject({
    method: 'GET',
    headers: { Accept: 'application/json' },
  })
})
