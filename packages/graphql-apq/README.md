# @svelkit/graphql-apq

> Automated persisted queries.

[![License](https://badgen.net/npm/license/@svelkit/graphql-apq)](https://github.com/kenoxa/@svelkit/graphql-apq/blob/main/LICENSE)
[![Latest Release](https://badgen.net/npm/v/@svelkit/graphql-apq)](https://www.npmjs.com/package/@svelkit/graphql-apq)
[![View changelog](https://badgen.net/badge/%E2%80%8B/Explore%20Changelog/green?icon=awesome)](https://changelogs.xyz/@svelkit/graphql-apq)
[![Bundle Size](https://badgen.net/bundlephobia/minzip/@svelkit/graphql-apq)](https://bundlephobia.com/result?p=@svelkit/graphql-apq)

<!-- prettier-ignore-start -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [@svelkit/graphql-apq](#svelkitgraphql-apq)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<!-- prettier-ignore-end -->

## Installation

```sh
npm install @svelkit/graphql-apq
```

And then import it:

```js
// using es modules
import { automaticPersistedQueriesExchange } from '@svelkit/graphql-apq'

// common.js
const { automaticPersistedQueriesExchange } = require('@svelkit/graphql-apq')
```

Alternatively use [UNPKG](https://unpkg.com/@svelkit/graphql-apq/) or [jsDelivr](https://cdn.jsdelivr.net/npm/@svelkit/graphql-apq/) packages.

Hotlinking from unpkg: _(no build tool needed!)_

```js
import { automaticPersistedQueriesExchange } from 'https://unpkg.com/@svelkit/graphql-apq?module'
```

## Usage

```html
<script>
  import { initGraphQLClient, useQuery, gql } from '@svelkit/graphql'
  import { automaticPersistedQueriesExchange } from '@svelkit/graphql-apq'

  initGraphQLClient({
    uri: 'https://swapi.graph.cool/',
    exchanges: [
      automaticPersistedQueriesExchange()
    ]
  })

  const films = useQuery(gql`
    query AllFilms {
      allFilms {
        id
        title
        releaseDate
      }
    }
  `)
</script>

{#if $films.fetching} Loading .. {:else if $films.error} Ups... {$films.error.message} {:else}
<ol>
  {#each $films.data.allFilms as film (film.id)}
  <li>{film.title} - {file.releaseDate}</li>
  {/each}
</ol>
{/if}
```

## License

`svelkit` is open source software [licensed as MIT](https://github.com/kenoxa/svelkit/blob/main/LICENSE).

[svelkit]: https://svelkit.js.org/
[svelte]: https://svelte.dev/
[graphql]: https://graphql.org/
