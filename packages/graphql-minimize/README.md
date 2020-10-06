# @svelkit/graphql-minimize

> Minify graphql documents to reduce request payload.

[![License](https://badgen.net/npm/license/@svelkit/graphql-minimize)](https://github.com/kenoxa/@svelkit/graphql-minimize/blob/main/LICENSE)
[![Latest Release](https://badgen.net/npm/v/@svelkit/graphql-minimize)](https://www.npmjs.com/package/@svelkit/graphql-minimize)
[![View changelog](https://badgen.net/badge/%E2%80%8B/Explore%20Changelog/green?icon=awesome)](https://changelogs.xyz/@svelkit/graphql-minimize)
[![Bundle Size](https://badgen.net/bundlephobia/minzip/@svelkit/graphql-minimize)](https://bundlephobia.com/result?p=@svelkit/graphql-minimize)

<!-- prettier-ignore-start -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [@svelkit/graphql-minimize](#svelkitgraphql-minimize)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<!-- prettier-ignore-end -->

## Installation

```sh
npm install @svelkit/graphql-minimize
```

And then import it:

```js
// using es modules
import { minimizeExchange } from '@svelkit/graphql-minimize'

// common.js
const { minimizeExchange } = require('@svelkit/graphql-minimize')
```

Alternatively use [UNPKG](https://unpkg.com/@svelkit/graphql-minimize/) or [jsDelivr](https://cdn.jsdelivr.net/npm/@svelkit/graphql-minimize/) packages.

Hotlinking from unpkg: _(no build tool needed!)_

```js
import { minimizeExchange } from 'https://unpkg.com/@svelkit/graphql-minimize?module'
```

## Usage

```html
<script>
  import { initGraphQLClient, useQuery, gql } from '@svelkit/graphql'
  import { minimizeExchange } from '@svelkit/graphql-minimize'

  initGraphQLClient({
    uri: 'https://swapi.graph.cool/',
    exchanges: [
      minimizeExchange()
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
