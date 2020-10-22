# Responsive

@svelkit/spectre provides a neat responsive layout grid system and responsive visibility utilities with [mobile-first design](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Responsive/Mobile_first) in mind.

There are `xs`, `sm`, `md`, `lg`, `xl` available for flexible grid across mobile, tablet and desktop viewport usage.

- `xs` apply to window width smaller than or equal to `480px`.
- `sm` apply to window width smaller than or equal to `600px`.
- `md` apply to window width smaller than or equal to `840px`.
- `lg` apply to window width smaller than or equal to `960px`.
- `xl` apply to window width smaller than or equal to `1280px`.


```example
<script>
  import { container, cols, col, bg } from '@svelkit/spectre'
</script>

<div use:container>
  <div use:cols>
    <div use:col={{xs: 12, sm: 6, md: 4}} use:bg.success>col-xs-12 col-sm-6 col-md-4</div>
    <div use:col={[12, 6, 4]} use:bg.primary>col-xs-12 col-sm-6 col-md-4</div>
    <div use:col={{xs: 12, md: 4}} use:bg.warning>col-xs-12 col-sm-6 col-md-4</div>
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
