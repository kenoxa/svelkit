# Shape utilities

[Shape utilities](https://picturepan2.github.io/spectre/utilities/shapes.html) are used for changing element shapes.

```example
<script>
  import { cols, col, text, bg, shape, padding } from '@svelkit/spectre'
</script>
<div use:cols>
  <div use:col={6} use:text.center>
    <div use:bg.primary use:text.light use:shape.rounded>shape rounded</div>
  </div>
  <div use:col={6} use:text.center>
    <div use:bg.primary use:text.light use:shape.circle>shape circle</div>
  </div>
</div>

```
