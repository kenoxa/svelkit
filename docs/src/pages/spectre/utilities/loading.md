# Loading utilities

[Loading indicators](https://picturepan2.github.io/spectre/utilities/loading.html) are used for loading or updating.

```example
<script>
  import { loading, cols, col, text } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col use:text.center>
    <span use:loading></span>
  </div>
</div>
```

You can add the use:loading action to a container for loading status.

```example
<script>
  import { loading, cols, col, text } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col use:text.center>
    <span use:loading.lg></span>
  </div>
</div>
```

Add the `lg` property for large size.
