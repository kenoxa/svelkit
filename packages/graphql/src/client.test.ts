import type { GraphQLStoreValue } from './types'
import type { Readable } from 'svelte/store'
import fetchMock from 'fetch-mock-jest'
import { createGraphQLClient } from './client'
import { toPromise } from './internal/to-promise'

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

  const client = createGraphQLClient({ uri })

  const result = await toPromise(
    client.request(query, variables) as Readable<GraphQLStoreValue<undefined>>,
  )

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
