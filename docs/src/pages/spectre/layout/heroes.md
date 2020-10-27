# Heroes

[Heroes](https://picturepan2.github.io/spectre/layout/hero.html) show key featured content or information.

```example
<script>
  import { hero, cols, col, bg, h1 } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col>
    <div use:hero use:bg.gray>
      <div use:hero.body>
        <h1 use:h1>Hero title</h1>
        <p>This is a hero example</p>
      </div>
    </div>
  </div>
</div>
```

Use `use:hero.sm` and `use:hero.lg` to the hero container for smaller and larger padding.

```example
<script>
  import { hero, cols, col, bg, h1 } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col>
    <div use:hero={"sm"} use:bg.dark>
      <div use:hero.body>
        <h1 use:h1>Hero title</h1>
        <p>This is a hero example</p>
      </div>
    </div>
  </div>
</div>
```

```example
<script>
  import { hero, cols, col, bg, h1 } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col>
    <div use:hero={"lg"} use:bg.primary>
      <div use:hero.body>
        <h1 use:h1>Hero title</h1>
        <p>This is a hero example</p>
      </div>
    </div>
  </div>
</div>
```
