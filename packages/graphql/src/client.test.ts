import 'cross-fetch/polyfill'
import fetchMock from 'fetch-mock-jest'
import { Client } from './client'
import { toPromise } from './internal/to-promise'
import { minimize } from './internal/minimize'

beforeEach(() => {
  fetchMock.mockReset()
})

test('basic query', async () => {
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

  const client = new Client({ url })

  const result = await toPromise(client.request(query, variables))

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
