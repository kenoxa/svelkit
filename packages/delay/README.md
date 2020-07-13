# @svelkit/delay

> a delay component for [svelte] (part of [sveltik])

[![License](https://badgen.net/npm/license/@sveltik/delay)](https://github.com/kenoxa/@sveltik/delay/blob/main/LICENSE)
[![Latest Release](https://badgen.net/npm/v/@sveltik/delay)](https://www.npmjs.com/package/@sveltik/delay)
[![View changelog](https://badgen.net/badge/%E2%80%8B/Explore%20Changelog/green?icon=awesome)](https://changelogs.xyz/@sveltik/delay)
[![Bundle Size](https://badgen.net/bundlephobia/minzip/@sveltik/delay)](https://bundlephobia.com/result?p=@sveltik/delay)

## What?

A component that shows its content only after a delay.

## Why?

Sometimes content, like a loading indicator, may only be visible very briefly and result in a flickering experience. This component prevents that.

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
npm install @sveltik/delay
```

And then import it:

```js
// using es modules
import Delay from '@sveltik/delay'

// common.js
const Delay = require('@sveltik/delay')
```

Alternatively use [UNPKG](https://unpkg.com/@sveltik/delay/) or [jsDelivr](https://cdn.jsdelivr.net/npm/@sveltik/delay/) packages.

Hotlinking from unpkg: _(no build tool needed!)_

```js
import Delay from 'https://unpkg.com/@sveltik/delay?module'
```

## Usage

```html
<Delay>content</Delay>
```

Increasing the default delay of `200`:

```html
<Delay delay="{500}">content</Delay>
```

The `show` property (default `true`) is used to determine if the content should be shown. Each change of its value cause the internal timer to reset, eg restarting the delay.

```html
<Delay show="{someKey}">content</Delay>
```

## License

`sveltik` is open source software [licensed as MIT](https://github.com/kenoxa/sveltik/blob/main/LICENSE).

[sveltik]: https://sveltik.js.org/
[svelte]: https://svelte.dev/
