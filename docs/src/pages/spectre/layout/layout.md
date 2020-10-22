# Layout

Layout includes [flexbox](https://developer.mozilla.org/en-US/docs/Glossary/Flexbox) based responsive grid system with 12 columns.

- https://getbootstrap.com/docs/4.5/layout/grid/#how-it-works
- https://styled-system.com/responsive-styles

```example
<script>
  import { container, cols, col, bg } from '@svelkit/spectre'
</script>

<div use:container>
  <div use:cols>
    <div use:col={12} use:bg.warning>col-12</div>
    <div use:col={6} use:bg.primary>col-6</div>
    <div use:col={3} use:bg.secondary>col-3</div>
    <div use:col={2} use:bg.success>col-2</div>
    <div use:col={1} use:bg.error>col-1</div>
  </div>
</div>
```

Add the action `use:cols` or `use:columns` to an element. And add the `use:col` or `use:column` to any element inside the columns container. These columns will take up the space equally. You can specify the [flex-basis](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis) of each column by passing `<1-12>` to `use:col`.

## Gap

```example
<script>
  import { container, cols, col, bg } from '@svelkit/spectre'
</script>


<div use:cols use:cols.gap={2}>
  <div use:col={6} use:bg.primary>col-6</div>
  <div use:col={4} use:bg.primary>col-4</div>
  <div use:col={2} use:bg.primary>col-2</div>
  <div use:col={6} use:bg.warning>col-6</div>
  <div use:col={4} use:bg.warning>col-4</div>
  <div use:col={2} use:bg.warning>col-2</div>
</div>
```

You can add the action use:cols.gap and pass <1-12> as a parameter to have gaps between columns.

## Grid nesting

```example
<script>
  import { container, cols, col, bg } from '@svelkit/spectre'
</script>

<div use:container>
  <div use:cols>
    <div use:col={6} use:bg.warning>
      <div use:cols>
        <div use:col={6} use:bg.success>Col-6</div>
        <div use:col={3} use:bg.error>col-3</div>
        <div use:col={3} use:bg.primary>col-3</div>
      </div>
    </div>
    <div use:col={3} use:bg.secondary>col-3</div>
    <div use:col={2} use:bg.success>col-2</div>
    <div use:col={1} use:bg.error>col-1</div>
  </div>
</div>
```

## Column offset

```example
<script>
  import { container, cols, col, bg } from '@svelkit/spectre'
</script>

<div use:container>
  <div use:cols>
    <div use:col={2} use:bg.warning>col-2</div>
    <div use:col={4} use:col.margin={"left"} use:bg.primary>col-4 left</div>
  </div>
  <div use:cols>
    <div use:col={4} use:col.margin={"right"} use:bg.success>col-4 right</div>
    <div use:col={2} use:bg.error>col-2</div>
  </div>
  <div use:cols>
    <div use:col={2} use:col.margin={"auto"} use:bg.secondary>col-2 auto</div>
  </div>
</div>
```
