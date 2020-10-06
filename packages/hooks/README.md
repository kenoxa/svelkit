# @svelkit/hooks

> common hooks for [svelte] (part of [svelkit])

[![License](https://badgen.net/npm/license/@svelkit/hooks)](https://github.com/kenoxa/@svelkit/hooks/blob/main/LICENSE)
[![Latest Release](https://badgen.net/npm/v/@svelkit/hooks)](https://www.npmjs.com/package/@svelkit/hooks)
[![View changelog](https://badgen.net/badge/%E2%80%8B/Explore%20Changelog/green?icon=awesome)](https://changelogs.xyz/@svelkit/hooks)
[![Bundle Size](https://badgen.net/bundlephobia/minzip/@svelkit/hooks)](https://bundlephobia.com/result?p=@svelkit/hooks)

## What?

A hook is a function that must be called during component initialization.

## Why?

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
npm install @svelkit/hooks
```

And then import it:

```js
// using es modules
import { useAutoId } from '@svelkit/hooks'

// common.js
const { useAutoId } = require('@svelkit/hooks')
```

Alternatively use [UNPKG](https://unpkg.com/@svelkit/hooks/) or [jsDelivr](https://cdn.jsdelivr.net/npm/@svelkit/hooks/) packages.

Hotlinking from unpkg: _(no build tool needed!)_

```js
import { useAutoId } from 'https://unpkg.com/@svelkit/hooks?module'
```

## Usage

```html
<script>
  import { useAutoId } from '@svelkit/hooks'

  const autoId = useAutoId('my-form')
</script>

<label for="{autoId('name')}">Name</label>
<input id="{autoId('name')}" />

<label for="{autoId('email')}">E-Mail</label>
<input id="{autoId('email')}" type="email" />
```

## License

`svelkit` is open source software [licensed as MIT](https://github.com/kenoxa/svelkit/blob/main/LICENSE).

[svelkit]: https://svelkit.js.org/
[svelte]: https://svelte.dev/
