# @svelkit/baseline

> A baseline component to kickstart an elegant, consistent, and simple baseline to build upon.

[![License](https://badgen.net/npm/license/@svelkit/baseline)](https://github.com/kenoxa/@svelkit/baseline/blob/main/LICENSE)
[![Latest Release](https://badgen.net/npm/v/@svelkit/baseline)](https://www.npmjs.com/package/@svelkit/baseline)
[![View changelog](https://badgen.net/badge/%E2%80%8B/Explore%20Changelog/green?icon=awesome)](https://changelogs.xyz/@svelkit/baseline)
[![Bundle Size](https://badgen.net/bundlephobia/minzip/@svelkit/baseline)](https://bundlephobia.com/result?p=@svelkit/baseline)

## Why?

It fixes some inconsistencies across browsers and devices while providing slightly more opinionated resets to common HTML elements.

<!-- prettier-ignore-start -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Installation](#installation)
- [Global reset](#global-reset)
- [Scoping on children](#scoping-on-children)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<!-- prettier-ignore-end -->

## Installation

```sh
npm install @svelkit/baseline
```

And then import it:

```js
// using es modules
import Baseline from '@svelkit/baseline'

// common.js
const Baseline = require('@svelkit/baseline')
```

Alternatively use [UNPKG](https://unpkg.com/@svelkit/baseline/) or [jsDelivr](https://cdn.jsdelivr.net/npm/@svelkit/baseline/) packages.

Hotlinking from unpkg: _(no build tool needed!)_

```js
import Baseline from 'https://unpkg.com/@svelkit/baseline?module'
```

## Global reset

You might be familiar with [normalize.css](https://github.com/necolas/normalize.css), a collection of HTML element and attribute style-normalizations.

```html
<Baseline />
<!-- The rest of your application -->
```

## Scoping on children

However, you might be progressively migrating a website to [svelkit], using a global reset might not be an option. It's possible to apply the baseline only to the children by using the [ScopedBaseline](../scoped-baseline/README.md) component.

```html
<script>
  import ScopedBaseline from '@svelkit/scoped-baseline'
  import MyApp from './MyApp'
</script>

<ScopedBaseline>
  <!-- The rest of your application -->
  <MyApp />
</ScopedBaseline>
```

> Make sure you import `ScopedBaseline` first to avoid box-sizing conflicts as in the above example.

## License

`svelkit` is open source software [licensed as MIT](https://github.com/kenoxa/svelkit/blob/main/LICENSE).

[svelkit]: https://svelkit.js.org/
[svelte]: https://svelte.dev/
