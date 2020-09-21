# Spectre

Just like clsx but with mapped class names.

```example
<script>
  import { spectre } from '@svelkit/spectre'
</script>

<div use:spectre={'container'}>
  <div use:spectre={'columns'}>
    <div use:spectre={'column col-md-auto col-6'}>col-md-auto</div>
    <div use:spectre={'column'}>col</div>
  </div>
</div>
```
