import type { Readable } from 'svelte/store'
import type { GraphQLResponse } from '../types'

export const toPromise = <T>(store: Readable<GraphQLResponse<T>>): Promise<GraphQLResponse<T>> =>
  new Promise<GraphQLResponse<T>>((resolve, reject) => {
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
