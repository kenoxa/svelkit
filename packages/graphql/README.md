# @svelkit/graphql

> A lightweight [GraphQL] client for [svelte]

[![License](https://badgen.net/npm/license/@sveltik/graphql)](https://github.com/kenoxa/@sveltik/graphql/blob/main/LICENSE)
[![Latest Release](https://badgen.net/npm/v/@sveltik/graphql)](https://www.npmjs.com/package/@sveltik/graphql)
[![View changelog](https://badgen.net/badge/%E2%80%8B/Explore%20Changelog/green?icon=awesome)](https://changelogs.xyz/@sveltik/graphql)
[![Bundle Size](https://badgen.net/bundlephobia/minzip/@sveltik/graphql)](https://bundlephobia.com/result?p=@sveltik/graphql)

## What?

Use [GraphQL] APIs in [svelte] the svelte way. Either as [readable store](https://svelte.dev/docs#svelte_store) or using [promises](https://svelte.dev/docs#await).

## Why?

Existing solutions ([graphql-svelte](https://www.npmjs.com/package/graphql-svelte), [@urql/svelte](https://github.com/FormidableLabs/urql/tree/main/packages/svelte-urql), and [others](https://www.npmjs.com/search?q=svelte%20graphql)) didn't provide the API we were looking for, features we would not need or are to heavy.

This solutions focuses on a _native_ svelte API using [svelte/store](https://svelte.dev/docs#svelte_store).

<!-- prettier-ignore-start -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<!-- prettier-ignore-end -->

## Installation

```sh
npm install @sveltik/graphql
```

And then import it:

```js
// using es modules
import { useQuery, gql } from '@sveltik/graphql'

// common.js
const { useQuery, gql } = require('@sveltik/graphql')
```

Alternatively use [UNPKG](https://unpkg.com/@sveltik/graphql/) or [jsDelivr](https://cdn.jsdelivr.net/npm/@sveltik/graphql/) packages.

Hotlinking from unpkg: _(no build tool needed!)_

```js
import { useQuery, gql } from 'https://unpkg.com/@sveltik/graphql?module'
```

## Usage

```html
<script>
  import { initGraphQLClient, useQuery, gql } from '@sveltik/graphql'

  initGraphQLClient({ url: 'https://swapi.graph.cool/' })

  const films = useQuery(gql`
    query {
      allFilms {
        id
        title
        releaseDate
      }
    }
  `)
</script>

{#if $films.fetching} Loading ... {:else if $films.error} Ups... {$films.error.message} {:else}
<ol>
  {#each $films.data.allFilms as film (film.id)}
  <li>{film.title} - {file.releaseDate}</li>
  {/each}
</ol>
{/if}
```

## License

`sveltik` is open source software [licensed as MIT](https://github.com/kenoxa/sveltik/blob/main/LICENSE).

[sveltik]: https://sveltik.js.org/
[svelte]: https://svelte.dev/
[graphql]: https://graphql.org/
