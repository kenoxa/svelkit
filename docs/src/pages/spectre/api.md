# @svelkit/spectre

Using [spectre] to create lightweight, responsive and modern UIs.

## Installation

```sh
npm install @svelkit/spectre
```

## Usage

This package exports a number of [actions](https://svelte.dev/docs#use_action) to add [spectre] css classes to DOM elements. Some actions additionally add aria attributes.

*Note:* Using nested actions (eg: `use:btn.primary`) requires `svelte@^3.26.0`

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

<button use:btn use:badge={8}>
  Button
</button>
```

## The `spectre` action

The `spectre` action utility allows constructing class strings conditionally.

```example
<script>
  import { spectre } from '@svelkit/spectre'
</script>

<button use:spectre={'btn badge'} data-badge="8">
  Button
</button>
```

Using the `spectre` class helper:

```example
<script>
  import { spectre } from '@svelkit/spectre'
</script>

<button class={spectre('btn badge')} data-badge="8">
  Button
</button>
```

This function can take **any** number of arguments, each of which can be an Object, Array, Boolean, or String.

```js
// Strings (variadic)
spectre('btn', true && 'active', 'btn-lg');
// => 'btn active btn-lg'

// Objects
spectre({ btn: true, loading: false, disabled: isTrue() });
// => 'btn disabled'

// Objects (variadic)
spectre({ btn: true }, { active: false }, null, { 'loading': $fetching });
// => 'btn loading'

// Arrays
spectre(['btn', 0, false && 'active', 'btn-primary']);
// => 'btn btn-primary'

// Arrays (variadic)
spectre(['btn'], ['', 0, false, 'tooltip'], [['loading', [['active'], 'disabled']]]);
// => 'btn tooltip loading active disabled'

// Kitchen sink (with nesting)
spectre('btn', [1 && 'loading', { active: false, disabled: null }, ['btn-lg', ['btn-primary']]], 'tooltip');
// => 'btn loading btn-lg btn-primary tooltip'
```

All falsey values are discarded! Standalone Boolean values are discarded as well.

```js
spectre(true, false, '', null, undefined, 0, NaN);
// => ''
```


[spectre]: https://picturepan2.github.io/spectre/
