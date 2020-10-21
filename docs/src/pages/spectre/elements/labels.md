# Labels

[Labels](https://picturepan2.github.io/spectre/elements/labels.html) are formatted text tags for highlighted, informative information.

```example
<script>
  import { label, cols, col } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col>
    <span use:label >default label</span>
    <span use:label={"primary"}>primary label</span>
    <span use:label={"secondary"}>secondary label</span>
    <span use:label={"success"}>success label</span>
    <span use:label={"warning"}>warning label</span>
    <span use:label={"error"}>error label</span>
  </div>
</div>
```

Add the action `use:label` to `<span>` or `<small>` elements. You can pass a parameter to the action: `primary`, `secondary`, `success`, `warning` and `error` for colored labels.


## Rounded labels

```example
<script>
  import { label, cols, col } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col>
    <span use:label={"rounded"}>default label</span>
    <span use:label={{variant: "primary", rounded: true}}>primary label</span>
    <span use:label={{variant: "secondary", rounded: true}}>secondary label</span>
    <span use:label={{variant: "success", rounded: true}}>success label</span>
    <span use:label={{variant: "warning", rounded: true}}>warning label</span>
    <span use:label={{variant: "error", rounded: true}}>error label</span>
  </div>
</div>
```

Add the property `rounded: true` to have rounded labels.
