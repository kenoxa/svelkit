# Responsive

@svelkit/spectre provides a neat responsive layout grid system and responsive visibility utilities.

There are `xs`, `sm`, `md`, `lg`, `xl`, and `default | df` available for flexible grid across mobile, tablet and desktop viewport usage.

- `xs` applies to window width smaller than or equal to `480px`.
- `sm` applies to window width smaller than or equal to `600px`.
- `md` applies to window width smaller than or equal to `840px`.
- `lg` applies to window width smaller than or equal to `960px`.
- `xl` applies to window width smaller than or equal to `1280px`.
- `df` or `default` applies to any unspecified window width.

```example
<script>
  import { container, cols, col, bg } from '@svelkit/spectre'
</script>
<div use:container>
  <div use:cols>
    <div use:col={{xs: 12, sm: 4, df: 3}} use:bg.success>col-xs-12 col-sm-4 col-3</div>
    <div use:col={{xs: 12, sm: 4, default: 3}} use:bg.primary>col-xs-12 col-sm-4 col-3</div>
    <div use:col={[12, 4, 3]} use:bg.warning>col-xs-12 col-sm-4 col-3</div>
  </div>
</div>
```

```example
<script>
  import { container, cols, col, bg } from '@svelkit/spectre'
</script>
<div use:container>
  <div use:cols.gap={2}>
    <div use:bg.primary use:col={[12, 6, 3]}>col-xs-12, col-sm-6, col-3</div>
    <div use:bg.primary use:col={[12, 6, 3]}>col-xs-12, col-sm-6, col-3</div>
    <div use:bg.primary use:col={[12, 6, 3]}>col-xs-12, col-sm-6, col-3</div>
    <div use:bg.primary use:col={[12, 6, 3]}>col-xs-12, col-sm-6, col-3</div>
    <div use:bg.primary use:col={[12, 6, 4, 3, 2, 1]}>col-xs-12, col-sm6, col-md-4, col-lg-3, col-xl-2, col-1</div>
    <div use:bg.primary use:col={[12, 6, 4, 3, 2, 1]}>col-xs-12, col-sm6, col-md-4, col-lg-3, col-xl-2, col-1</div>
    <div use:bg.primary use:col={[12, 6, 4, 3, 2, 1]}>col-xs-12, col-sm6, col-md-4, col-lg-3, col-xl-2, col-1</div>
    <div use:bg.primary use:col={[12, 6, 4, 3, 2, 1]}>col-xs-12, col-sm6, col-md-4, col-lg-3, col-xl-2, col-1</div>
    <div use:bg.primary use:col={[12, 6, 4, 3, 2, 1]}>col-xs-12, col-sm6, col-md-4, col-lg-3, col-xl-2, col-1</div>
    <div use:bg.primary use:col={[12, 6, 4, 3, 2, 1]}>col-xs-12, col-sm6, col-md-4, col-lg-3, col-xl-2, col-1</div>
    <div use:bg.primary use:col={[12, 6, 4, 3, 2, 1]}>col-xs-12, col-sm6, col-md-4, col-lg-3, col-xl-2, col-1</div>
    <div use:bg.primary use:col={[12, 6, 4, 3, 2, 1]}>col-xs-12, col-sm6, col-md-4, col-lg-3, col-xl-2, col-1</div>
    <div use:bg.primary use:col={[12, 6, 4, 3, 2, 1]}>col-xs-12, col-sm6, col-md-4, col-lg-3, col-xl-2, col-1</div>
    <div use:bg.primary use:col={[12, 6, 4, 3, 2, 1]}>col-xs-12, col-sm6, col-md-4, col-lg-3, col-xl-2, col-1</div>
    <div use:bg.primary use:col={[12, 6, 4, 3, 2, 1]}>col-xs-12, col-sm6, col-md-4, col-lg-3, col-xl-2, col-1</div>
    <div use:bg.primary use:col={[12, 6, 4, 3, 2, 1]}>col-xs-12, col-sm6, col-md-4, col-lg-3, col-xl-2, col-1</div>
  </div>
</div>
```
