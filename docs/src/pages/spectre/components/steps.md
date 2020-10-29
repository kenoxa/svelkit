# Steps

[Steps](https://picturepan2.github.io/spectre/components/steps.html) are progress indicators of a sequence of task steps.

```example
<script>
  import { step, tooltip, cols, col } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col={12}>
    <ul use:step>
      <li use:step.item>
        <a use:tooltip={"Step 1 Tooltip"} href="#"></a>
      </li>
      <li use:step.item={"active"}>
        <a use:tooltip={"Step 2 Tooltip"} href="#"></a>
      </li>
      <li use:step.item>
        <a use:tooltip={"Step 3 Tooltip"} href="#"></a>
      </li>
      <li use:step.item>
        <a use:tooltip={"Step 4 Tooltip"} href="#"></a>
      </li>
    </ul>
  </div>
  <div use:col={12}>
    <ul use:step>
      <li use:step.item>
        <a use:tooltip={"Step 1 Tooltip"} href="#">Step 1</a>
      </li>
      <li use:step.item>
        <a use:tooltip={"Step 2 Tooltip"} href="#">Step 2</a>
      </li>
      <li use:step.item={"active"}>
        <a use:tooltip={"Step 3 Tooltip"} href="#">Step 3</a>
      </li>
      <li use:step.item>
        <a use:tooltip={"Step 4 Tooltip"} href="#">Step 4</a>
      </li>
    </ul>
  </div>
</div>
```

Add the `use:step` action to a container element. And add the `use:step.item` action to child elements. The item with the `use:active` action will be highlighted and indicate the current state of progress.
