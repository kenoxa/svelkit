import type { Readable } from 'svelte/store'
import type { GraphQLStoreValue } from '../types'

export const toPromise = <Data, V>(
  store: Readable<GraphQLStoreValue<Data, V>>,
): Promise<GraphQLStoreValue<Data, V>> =>
  new Promise<GraphQLStoreValue<Data, V>>((resolve, reject) => {
    const unsubscribe = store.subscribe((result) => {
      if (result.data) {
        unsubscribe()
        resolve(result)
      } else if (result.error) {
        unsubscribe()
        reject(result.error)
      }
    })
  })
