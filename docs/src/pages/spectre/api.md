# @svelkit/spectre

Using [spectre] to create lightweight, responsive and modern UIs.

## Installation

```sh
npm install @svelkit/spectre
```

## Usage

This package exports a number of [actions](https://svelte.dev/docs#use_action) to add [spectre] css classes to DOM elements. Some actions additionally add aria attributes.

## API

Each action can be used with the `use:action` svelte directive: ```<T>(node: Element, options?: T) => { update(options?: T): void }```.

```example
<script>
  import { badge } from '@svelkit/spectre'
</script>

<span use:badge>Notifications</span>
```

In some cases it may be useful to get the css classes as a string. All actions support this as well: ```<T>(options?: T) => string```

```example
<script>
  import { badge } from '@svelkit/spectre'
</script>

<span class={badge()}>Notifications</span>
```

Actions can be combined:

```example
<script>
  import { badge, btn } from '@svelkit/spectre'
</script>

<button use:badge={8} use:btn>
  Button
</button>
```

Use the `spectre` action:

```example
<script>
  import { spectre } from '@svelkit/spectre'
</script>

<button use:spectre={'btn badge'} data-badge="8">
  Button
</button>
```

Use the `spectre` class helper:

```example
<script>
  import { spectre } from '@svelkit/spectre'
</script>

<button class={spectre('btn badge')} data-badge="8">
  Button
</button>
```

[spectre]: https://picturepan2.github.io/spectre/
