# Cursor utilities

[Cursor utilities](https://picturepan2.github.io/spectre/utilities/cursors.html) specify which mouse cursor to display when mouseover.

```example
<script>
  import { cols, col, cursor, bg } from '@svelkit/spectre'
</script>
<div use:cols>
  <div use:col={4}>
    <div use:bg.gray use:cursor.hand>c-hand</div>
  </div>
  <div use:col={4}>
    <div use:bg.gray use:cursor.move>c-move</div>
  </div>
  <div use:col={4}>
    <div use:bg.gray use:cursor.zoomIn>c-zoom-in</div>
  </div>
  <div use:col={4}>
    <div use:bg.gray use:cursor.zoomOut>c-zoom-out</div>
  </div>
  <div use:col={4}>
    <div use:bg.gray use:cursor.notAllowed>c-not-allowed</div>
  </div>
  <div use:col={4}>
    <div use:bg.gray use:cursor.auto>c-auto</div>
  </div>
</div>
```
