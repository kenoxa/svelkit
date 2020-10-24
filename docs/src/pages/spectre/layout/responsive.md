# Responsive

@svelkit/spectre provides a neat responsive layout grid system and responsive visibility utilities with [mobile-first design](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Responsive/Mobile_first) in mind.

There are `xs`, `sm`, `md`, `lg`, `xl` available for flexible grid across mobile, tablet and desktop viewport usage.

- `xs` or `default` applies to window width from `0px` and up.
- `sm` applies to window width from `480px` and up.
- `md` applies to window width from `600px` and up.
- `lg` applies to window width from `840px` and up.
- `xl` applies to window width from `960px` and up.
- `xxl` applies to window width from `1280px` and up.


```example
<script>
  import { container, cols, col, bg } from '@svelkit/spectre'
</script>
<div use:container>
  <div use:cols>
    <div use:col={{xs: 12, sm: 6, xxl: 3}} use:bg.success>col-12 col-sm-6 col-xxl-3</div>
    <div use:col={{default: 12, sm: 6, xxl: 3}} use:bg.error>col-12 col-sm-6 col-xxl-3</div>
    <div use:col={[12, 6, , , , 3]} use:bg.primary>col-12 col-sm-6 col-xxl-3</div>
    <div use:col={[ , 6, , , , 3]} use:bg.warning>col col-sm-6 col-xxl-3</div>
  </div>
</div>
```


```example
<script>
  import { container, cols, col, bg } from '@svelkit/spectre'
</script>
<div use:container>
  <div use:cols>
    <div use:col={{xs: 12, sm: 6, md: 4}} use:bg.success>col-xs-12 col-sm-6 col-md-4</div>
    <div use:col={[12, 6, 4]} use:bg.primary>col-12 col-sm-6 col-md-4</div>
  </div>
</div>
```

```example
<script>
  import { container, cols, col, bg } from '@svelkit/spectre'
</script>
<div use:container>
  <div use:cols>
    <div use:col={{xs: 12, md: 8, xl: 4}} use:bg.error>col-xs-12 col-md-8 col-xl-4</div>
  </div>
</div>
```
