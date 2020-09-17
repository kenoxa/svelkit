# @svelkit/spectre

> [spectre] components as [svelte] actions and css modules (part of [svelkit])

[![License](https://badgen.net/npm/license/@svelkit/spectre)](https://github.com/kenoxa/@svelkit/spectre/blob/main/LICENSE)
[![Latest Release](https://badgen.net/npm/v/@svelkit/spectre)](https://www.npmjs.com/package/@svelkit/spectre)
[![View changelog](https://badgen.net/badge/%E2%80%8B/Explore%20Changelog/green?icon=awesome)](https://changelogs.xyz/@svelkit/spectre)
[![Bundle Size](https://badgen.net/bundlephobia/minzip/@svelkit/spectre)](https://bundlephobia.com/result?p=@svelkit/spectre)

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
npm install @svelkit/spectre
```

And then import it:

```js
// using es modules
import { spectre } from '@svelkit/spectre'

// common.js
const { spectre } = require('@svelkit/spectre')
```

Alternatively use [UNPKG](https://unpkg.com/@svelkit/spectre/) or [jsDelivr](https://cdn.jsdelivr.net/npm/@svelkit/spectre/) packages.

Hotlinking from unpkg: _(no build tool needed!)_

```js
import { spectre } from 'https://unpkg.com/@svelkit/spectre?module'
```

## Usage

### As [svelte] actions

```html
<script>
  import { btn, card, chip, heading, text, img } from '@svelkit/spectre'

  let active = false
</script>

<div use:chip="{{ active }}">may be active</div>

<div use:chip>not active</div>
<div use:chip.active>active</div>

<div use:spectre.shadow>
  <div use:spectre.image>
    <img src="img/osx-el-capitan.jpg" use:img.responsive />
  </div>
  <div use:spectre.header>
    <div use:heading="{5}">...</div>
    <div use:text.gray>...</div>
  </div>
  <div use:spectre.body>...</div>
  <div use:spectre.footer>
    <button use:btn.primary>...</button>
  </div>
</div>
```

### As css modules

```html
<script>
  import { btn, chip, heading, text, img } from '@svelkit/spectre'

  let active = false
</script>

<div class="{chip.clsx({ active })}">may be active</div>

<div class="{chip.class}">not active</div>
<div class="{chip.active.class}">active</div>

<div class="{spectre.shadow.class}">
  <div class="{spectre.image.class}">
    <img src="img/osx-el-capitan.jpg" class="{img.responsive.class}" />
  </div>
  <div class="{spectre.header.class}">
    <div class="{heading.clsx(5)}">...</div>
    <div class="{text.gray.class}">...</div>
  </div>
  <div class="{spectre.body.class}">...</div>
  <div class="{spectre.footer.class}">
    <button class="{btn.primary.class}">...</button>
  </div>
</div>
```

## License

`svelkit` is open source software [licensed as MIT](https://github.com/kenoxa/svelkit/blob/main/LICENSE).

[svelkit]: https://svelkit.js.org/
[svelte]: https://svelte.dev/
[spectre]: https://picturepan2.github.io/spectre
