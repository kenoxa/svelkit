# Tooltips

[Tooltips](https://picturepan2.github.io/spectre/components/tooltips.html) provide context information labels that appear on hover and focus. Tooltips component is built entirely in CSS.

```example
<script>
  import { tooltip, btn, cols, col } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col>
    <button use:btn.primary use:tooltip={"Top Tooltip Text"}>top tooltip</button>
  </div>
  <div use:col>
    <button use:btn.primary use:tooltip.right={"Right Tooltip Text"}>right tooltip</button>
  </div>
  <div use:col>
    <button use:btn.primary use:tooltip.bottom={"Bottom Tooltip Text"}>bottom tooltip</button>
  </div>
  <div use:col>
    <button use:btn.primary use:tooltip.left={"Left Tooltip Text \n Multiline"}>left tooltip</button>
  </div>
</div>
```

Add the `use:tooltip` action and pass a string value to the action, which contains the tooltip content, to a non-self closing elements.

And add the `right`, `bottom` or `left` property to define the position of a tooltip. By default, the tooltip appears above the element.

## Multiline tooltips

```example
<script>
  import { tooltip, btn, cols, col } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col>
    <button use:btn.primary use:tooltip={"First Line Tooltip Text \n
      Second Line Tooltip Text \n
      Third Line Tooltip Text"}>multiline tooltip
    </button>
  </div>
</div>
```

Add the `\n` string between any text for multiline tooltips.
