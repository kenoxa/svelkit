# Layout

Layout includes [flexbox](https://developer.mozilla.org/en-US/docs/Glossary/Flexbox) based responsive grid system with 12 columns.

- https://getbootstrap.com/docs/4.5/layout/grid/#how-it-works
- https://styled-system.com/responsive-styles

```example
<script>
  import { container, row, col } from '@svelkit/spectre'
</script>

<div use:container>
  <div use:row>
    <div use:col={6}>col-6</div>
    <div use:col={3}>col-3</div>
    <div use:col={2}>col-2</div>
    <div use:col={1}>col-1</div>
  </div>
</div>
```
