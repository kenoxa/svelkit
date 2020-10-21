# Buttons

[Buttons](https://picturepan2.github.io/spectre/elements/buttons.html) include simple button styles for actions in different types and sizes.

```example
<script>
  import { btn, cols, col } from '@svelkit/spectre'
</script>

<!-- form input control -->
<div use:cols>
  <div use:col={12}>
    <button use:btn>default button</button>
    <button use:btn={"primary"}>primary button</button>
    <button use:btn={"link"}>link button</button>
  </div>
</div>
```

Add the `use:btn` action to `<buton>`, `<input>` or `<a>` elements for a default button. There are properties `primary` and `link` for predefined primary and link buttons.

## Button colors

```example
<script>
  import { btn, cols, col } from '@svelkit/spectre'
</script>

<!-- form input control -->
<div use:cols>
  <div use:col={12}>
    <button use:btn={"success"}>success button</button>
    <button use:btn={"error"}>error button</button>
  </div>
</div>
```

Add property `success` or `error` for success (green) or error (red) button color. If you need more button colors, please use button mixins to create your own button color variants.

## Button sizes

```example
<script>
  import { btn, cols, col } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col={12}>
    <button use:btn={{variant: "primary", size: "lg"}}>large
      <i class="icon icon-arrow-down"></i></button>
    <button use:btn={{variant: "primary", size: "lg"}}>large button</button>
  </div>
  <div use:col={12}>
    <button use:btn={"primary"}>normal
      <i class="icon icon-arrow-down"></i></button>
    <button use:btn={"primary"}>normal button</button>
  </div>
  <div use:col={12}>
    <button use:btn={{variant: "primary", size: "sm"}}>small
      <i class="icon icon-arrow-down"></i></button>
    <button use:btn={{variant: "primary", size: "sm"}}>small button</button>
  </div>
</div>
```

Add the `size: sm` or `size: lg` property for small or large button size. Also, you can add the property `block: true` for a full-width button.

## Button shapes

```example
<script>
  import { btn, cols, col, shape } from '@svelkit/spectre'
</script>
<div use:cols>
  <div use:col={[6, 12]}>
    <button use:btn={{variant: "primary", size: "lg", action: true}}><i class="icon icon-menu"></i></button>
    <button use:btn={{variant: "primary", action: true}}><i class="icon icon-menu"></i></button>
    <button use:btn={{variant: "primary", size: "sm", action: true}}><i class="icon icon-menu"></i></button>
  </div>
  <div use:col={[6, 12]}>
    <button use:btn={{variant: "primary", size: "lg"}} use:shape={"circle"}><i class="icon icon-arrow-up"></i></button>
    <button use:btn={{variant: "primary", shape: "circle"}} use:shape={"circle"}><i class="icon icon-arrow-up"></i></button>
    <button use:btn={{variant: "primary", size: "sm"}} use:shape={"circle"}><i class="icon icon-arrow-up"></i></button>
  </div>
</div>
```

You can use the property `action: true` for a square button, or add another action use:shape={'circle'} for a round button, which is often used as a Float Action Button (FAB).

## Button states

```example
<script>
  import { btn, cols, col } from '@svelkit/spectre'
</script>

<!-- form input control -->
<div use:cols>
  <div use:col={12}>
    <button use:btn={"active"}>default button</button>
    <button use:btn={{variant: "primary", state: "active"}}>primary button</button>
    <button use:btn={{variant: "link", state: "active"}}>link button</button>
  </div>
</div>
```

Add the `state: active` property for active button state style.

```example
<script>
  import { btn, cols, col } from '@svelkit/spectre'
</script>

<!-- form input control -->
<div use:cols>
  <div use:col={12}>
    <button use:btn={"disabled"} tabindex="-1">default disabled</button>
    <button use:btn={"primary"} disabled tabindex="-1">primary disabled</button>
    <button use:btn={"link"} disabled tabindex="-1">link disabled</button>
  </div>
</div>
```

Add the `disabled` class or the disabled attribute for disabled button state style.

```example
<script>
  import { btn, cols, col } from '@svelkit/spectre'
</script>

<!-- form input control -->
<div use:cols>
  <div use:col={12}>
    <button use:btn={"loading"} tabindex="-1">default button</button>
    <button use:btn={{variant: "primary", state: "loading"}}>primary button</button>
    <button use:btn={{variant: "link", state: "loading"}}>link button</button>
  </div>
</div>
```

A button with the `state: loading` can show loading indicator.

## Button groups

```example
<script>
  import { btn, cols, col } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col={[6,12,12,12]}>
    <div use:btn.group>
      <button use:btn>first button</button>
      <button use:btn>second button</button>
      <button use:btn>third button</button>
    </div>
  </div>
  <div use:col={[6,12,12,12]}>
    <div use:btn.group={"block"}>
      <button use:btn={"primary"}>first button</button>
      <button use:btn={"primary"}>second button</button>
      <button use:btn={"primary"}>third button</button>
    </div>
  </div>
  <div use:col={[6,12,12,12]}>
    <div use:btn.group>
      <button use:btn={{size: "sm", state: "active"}}>first button</button>
      <button use:btn={"sm"}>second button</button>
      <button use:btn={"sm"}>third button</button>
    </div>
  </div>
  <div use:col={[6,12,12,12]}>
    <div use:btn.group={{block: true}}>
      <button use:btn={{variant: "primary", size: "sm", state: "active"}}>first button</button>
      <button use:btn={{variant: "primary", size: "sm"}}>second button</button>
      <button use:btn={{variant: "primary", size: "sm"}}>third button</button>
    </div>
  </div>
</div>
```
