# Position utilities

[Position utilities](https://picturepan2.github.io/spectre/utilities/position.html) are used for useful layout and position things, including clearfix, float, position and margin/padding utilities.

```example
<script>
  import { cols, col, margin, clearfix, float, position, padding, bg, spectre } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col use:bg.success use:clearfix>clearfix</div>
  <div use:col use:float.left>float left</div>
  <div use:col use:float.right>float right</div>
  <div use:col use:position.relative>position relative</div>
  <div use:col use:position.absolute>position absolute</div>
  <div use:col use:position.fixed>position fixed</div>
  <div use:col use:position.sticky>position sticky</div>
  <div use:col use:position.centered>position centered</div>
  <div use:col use:bg.primary use:margin={1}>margin: 0.25rem</div>
  <div use:col use:bg.error use:margin={2}>margin: 0.5rem</div>
  <div use:col use:bg.warning use:margin.t={1}>margin top: 0.25rem</div>
  <div use:col use:bg.success use:margin.t={2}>margin top: 0.5rem</div>
  <div use:col use:bg.primary use:margin.x={1}>margin left and right: 0.25rem</div>
  <div use:col use:bg.error use:margin.x={2}>margin left and right: 0.5rem</div>
  <div use:col use:bg.warning use:margin.y={1}>margin top and bottom: 0.25rem</div>
  <div use:col use:bg.success use:margin.y={2}>margin top and bottom: 0.5rem</div>
  <div use:col use:bg.primary use:padding={1}>padding: 0.25rem</div>
  <div use:col use:bg.error use:padding={2}>padding: 0.5rem</div>
  <div use:col use:bg.warning use:padding.t={1}>padding top: 0.25rem</div>
  <div use:col use:bg.success use:padding.t={2}>padding top: 0.5rem</div>
  <div use:col use:bg.primary use:padding.x={1}>padding left and right: 0.25rem</div>
  <div use:col use:bg.error use:padding.x={2}>padding left</div>
  <div use:col use:bg.warning use:padding.y={1}>padding top and bottom: 0.25rem</div>
  <div use:col use:bg.success use:padding.y={2}>padding top and bottom: 0.5rem</div>
</div>
```
