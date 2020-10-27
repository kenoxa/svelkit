# Layouts

Layouts include [flexbox](https://developer.mozilla.org/en-US/docs/Glossary/Flexbox) based responsive grid system with 12 columns.

- https://getbootstrap.com/docs/4.5/layout/grid/#how-it-works
- https://styled-system.com/responsive-styles

```example
<script>
  import { cols, col, bg } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col={12} use:bg.warning>col-12</div>
  <div use:col={6} use:bg.success>Col-6</div>
  <div use:col={3} use:bg.error>col-3</div>
  <div use:col={3} use:bg.dark>col-3</div>
</div>
```

Add the action `use:cols` or `use:columns` to an element. And add the `use:col` or `use:column` to any element inside the columns container. These columns will take up the space equally. You can specify the [flex-basis](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis) of each column by passing `<1-12>` to `use:col`.

## Grid nesting

```example
<script>
  import { cols, col, bg } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col={6} use:bg.primary>
    <div use:cols>
      <div use:col={6} use:bg.success>Col-6</div>
      <div use:col={3} use:bg.error>col-3</div>
      <div use:col={3} use:bg.dark>col-3</div>
    </div>
  </div>
  <div use:col={3} use:bg.warning>col-3</div>
  <div use:col={2} use:bg.success>col-2</div>
  <div use:col={1} use:bg.error>col-1</div>
</div>
```

## Gap

```example
<script>
  import { cols, col, bg } from '@svelkit/spectre'
</script>

<div use:cols.gap>
  <div use:col={12} use:bg.warning>col-12</div>
  <div use:col={6} use:bg.success>Col-6</div>
  <div use:col={3} use:bg.error>col-3</div>
  <div use:col={3} use:bg.dark>col-3</div>
</div>
<div use:cols.gapAround>
  <div use:col={12} use:bg.warning>col-12</div>
  <div use:col={6} use:bg.success>Col-6</div>
  <div use:col={3} use:bg.error>col-3</div>
  <div use:col={3} use:bg.dark>col-3</div>
</div>
```

You can use the `use:cols.gap` action to have gaps in between the columns.
Or you can use the `use:cols.gapAround` action to have gap between and around the columns.

```example
<script>
  import { cols, col, bg } from '@svelkit/spectre'
</script>

<div use:cols use:cols.gap={2}>
  <div use:col={12} use:bg.warning>col-12</div>
  <div use:col={6} use:bg.success>Col-6</div>
  <div use:col={3} use:bg.error>col-3</div>
  <div use:col={3} use:bg.dark>col-3</div>
</div>
<div use:cols use:cols.gapAround={2}>
  <div use:col={12} use:bg.warning>col-12</div>
  <div use:col={6} use:bg.success>Col-6</div>
  <div use:col={3} use:bg.error>col-3</div>
  <div use:col={3} use:bg.dark>col-3</div>
</div>
```

You can pass a number `<1-12>` as a parameter to the action to specify the gap size.
The `default` value is `1`.

## Nested grid gap

```example
<script>
  import { cols, col, bg } from '@svelkit/spectre'
</script>

<div use:cols use:cols.gap={2}>
  <div use:col={6} use:bg.warning>
    <div use:cols>
      <div use:col={3} use:bg.error>col-3</div>
      <div use:col={3} use:bg.dark>col-3</div>
    </div>
  </div>
  <div use:col={6} use:bg.success>Col-6</div>
</div>
<div use:cols use:cols.gapAround={2}>
  <div use:col={6} use:bg.warning>
      <div use:cols use:cols.gap>
      <div use:col={3} use:bg.error>col-3</div>
      <div use:col={3} use:bg.dark>col-3</div>
    </div>
  </div>
  <div use:col={6} use:bg.success>Col-6</div>
</div>
```

You can use gaps on nested grids. Gaps are affecting `direct children`.

## Column offset

```example
<script>
  import { cols, col, bg } from '@svelkit/spectre'
</script>


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

```

The `use.col` action provides margin auto utilities to set offset. There are `left`, `auto` and `right` available to set margins between columns without using empty columns.
