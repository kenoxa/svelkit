# @sveltik/scoped-baseline

> A scoped baseline component to progressively kickstart an elegant, consistent, and simple baseline to build upon.

[![License](https://badgen.net/npm/license/@sveltik/scoped-baseline)](https://github.com/kenoxa/@sveltik/scoped-baseline/blob/main/LICENSE)
[![Latest Release](https://badgen.net/npm/v/@sveltik/scoped-baseline)](https://www.npmjs.com/package/@sveltik/scoped-baseline)
[![View changelog](https://badgen.net/badge/%E2%80%8B/Explore%20Changelog/green?icon=awesome)](https://changelogs.xyz/@sveltik/scoped-baseline)
[![Bundle Size](https://badgen.net/bundlephobia/minzip/@sveltik/scoped-baseline)](https://bundlephobia.com/result?p=@sveltik/scoped-baseline)

## Why?

It fixes some inconsistencies across browsers and devices while providing slightly more opinionated resets to common HTML elements.

<!-- prettier-ignore-start -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [@sveltik/scoped-baseline](#sveltikscoped-baseline)
  - [Why?](#why)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<!-- prettier-ignore-end -->

## Installation

```sh
npm install @sveltik/scoped-baseline
```

And then import it:

```js
// using es modules
import ScopedBaseline from '@sveltik/scoped-baseline'

// common.js
const ScopedBaseline = require('@sveltik/scoped-baseline')
```

Alternatively use [UNPKG](https://unpkg.com/@sveltik/scoped-baseline/) or [jsDelivr](https://cdn.jsdelivr.net/npm/@sveltik/scoped-baseline/) packages.

Hotlinking from unpkg: _(no build tool needed!)_

```js
import ScopedBaseline from 'https://unpkg.com/@sveltik/scoped-baseline?module'
```

## Usage

Progressively migrate a website to [sveltik], using a [global reset](../baseline/README.md) might not be an option. It's possible to apply the baseline only to the children by using the `ScopedBaseline` component.

```html
<script>
  import ScopedBaseline from '@sveltik/scoped-baseline'
  import MyApp from './MyApp'
</script>

<ScopedBaseline>
  <!-- The rest of your application -->
  <MyApp />
</ScopedBaseline>
```

> Make sure you import `ScopedBaseline` first to avoid box-sizing conflicts as in the above example.

## License

`sveltik` is open source software [licensed as MIT](https://github.com/kenoxa/sveltik/blob/main/LICENSE).

[sveltik]: https://sveltik.js.org/
[svelte]: https://svelte.dev/
