# Color utilities

[Color](https://picturepan2.github.io/spectre/utilities/colors.html) utilities are used for changing colors for text, link and background.

## Text Colors

```example
<script>
  import { cols, col, text, bg, spectre } from '@svelkit/spectre'
</script>
<div use:cols>
    <div use:col>
      <p><span use:text.primary>primary color</span></p>
    </div>
    <div use:col>
      <p><span use:text.secondary>secondary color</span></p>
    </div>
    <div use:col>
      <p><span use:text.dark>dark color</span></p>
    </div>
    <div use:col>
      <p><span use:text.gray>gray color</span></p>
    </div>
    <div use:col>
      <p><span use:text.light use:bg.dark use:spectre={"p-1"}>light color</span></p>
    </div>
    <div use:col>
      <p><span use:text.success>success color</span></p>
    </div>
    <div use:col>
      <p><span use:text.warning>warning color</span></p>
    </div>
    <div use:col>
      <p><span use:text.error>error color</span></p>
    </div>
  </div>
```

```example
<script>
  import { cols, col, text, bg, spectre } from '@svelkit/spectre'
</script>
<div use:cols>
  <div use:col>
    <p><a use:text.primary href="#colors" on:click|preventDefault>primary link</a></p>
  </div>
  <div use:col>
    <p><a use:text.secondary href="#colors" on:click|preventDefault>secondary link</a></p>
  </div>
  <div use:col>
    <p><a use:text.dark href="#colors" on:click|preventDefault>dark link</a></p>
  </div>
  <div use:col>
    <p><a use:text.gray href="#colors" on:click|preventDefault>gray link</a></p>
  </div>
  <div use:col>
    <p><a use:text.light use:bg.dark use:spectre={"p-1"} href="#colors" on:click|preventDefault>light link</a></p>
  </div>
  <div use:col>
    <p><a use:text.success href="#colors" on:click|preventDefault>success link</a></p>
  </div>
  <div use:col>
    <p><a use:text.warning href="#colors" on:click|preventDefault>warning link</a></p>
  </div>
  <div use:col>
    <p><a use:text.error href="#colors" on:click|preventDefault>error link</a></p>
  </div>
</div>
```

## Background colors

```example
<script>
  import { cols, col, text, bg, spectre } from '@svelkit/spectre'
</script>
<div use:cols>
  <div use:col>
    <p><span use:bg.primary use:spectre={"p-1"}>primary bg</span></p>
  </div>
  <div use:col>
    <p><span use:bg.secondary use:spectre={"p-1"}>secondary bg</span></p>
  </div>
  <div use:col>
    <p><span use:bg.dark use:spectre={"p-1"}>dark bg</span></p>
  </div>
  <div use:col>
    <p><span use:bg.gray use:spectre={"p-1"}>gray bg</span></p>
  </div>
  <div use:col>
    <p><span use:bg.success use:spectre={"p-1"}>success bg</span></p>
  </div>
  <div use:col>
    <p><span use:bg.warning use:spectre={"p-1"}>warning bg</span></p>
  </div>
  <div use:col>
    <p><span use:bg.error use:spectre={"p-1"}>error bg</span></p>
  </div>
</div>
```
