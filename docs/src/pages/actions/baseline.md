# Baseline

> A baseline component to kickstart an elegant, consistent, and simple baseline to build upon.

## Why?

It fixes some inconsistencies across browsers and devices while providing slightly more opinionated resets to common HTML elements.

## Global reset

You might be familiar with [normalize.css](https://github.com/necolas/normalize.css), a collection of HTML element and attribute style-normalizations.

```example
<script>
  import { baseline } from '@svelkit/spectre'

  baseline()
</script>

<main>The application</main>
```

## Scoping on children

However, you might be progressively migrating a website to `svelkit`, using a global reset might not be an option. It's possible to apply the baseline only to the children of an element.

```example
<script>
  import { baseline } from '@svelkit/spectre'
</script>

<main use:baseline>The rest of your application</main>
```
