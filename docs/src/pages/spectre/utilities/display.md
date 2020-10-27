# Display utilities

[Display utilities](https://picturepan2.github.io/spectre/utilities/display.html) are used for display and hidden things.

```example
<script>
  import { cols, col, display, bg } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col use:bg.gray>
    <!-- display: block; -->
    <div use:display.block>display: block</div>
  </div>
  <div use:col use:bg.gray>
    <!-- display: inline; -->
    <div use:display.inline>display: inline</div>
  </div>
  <div use:col use:bg.gray>
    <!-- display: inline-block; -->
    <div use:display.inlineBlock>display: inline-block;</div>
  </div>
  <div use:col use:bg.gray>
    <!-- display: flex; -->
    <div use:display.flex>display: flex;</div>
  </div>
  <div use:col use:bg.gray>
    <!-- display: inline-flex; -->
    <div use:display.inlineFlex>display: inline-flex;</div>
  </div>
  <div use:col use:bg.gray>
    <!-- display: none; -->
    <div use:display.none>display: none;</div>
    <div use:display.hide>display: none;</div>
  </div>
  <div use:col use:bg.gray>
    <!-- visibility: visible; -->
    <div use:display.visible>visibility: visible;</div>
  </div>
  <div use:col use:bg.gray>
    <!-- visibility: hidden; -->
  <div use:display.invisible>visibility: hidden;</div>
  </div>
</div>
```
