# Toast

[Toast](https://picturepan2.github.io/spectre/components/toasts.html) are used to show alert or information to users.

```example
<script>
  import { toast, cols, col, spectre } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col={[12,9]}>
    <div use:toast>
      <button use:btn.clear use:spectre={"float-right"}></button>
      <h6>Toast Title</h6>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
  <div use:col={[12,9]}>
    <div use:toast.primary>
      <button use:btn.clear use:spectre={"float-right"}></button>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
</div>
```

Add the `use:toast` to a container element. You can add any text within the container, and even icons. You may also add a close button with the `clear` property if you need.

```example
<script>
  import { toast, cols, col, spectre } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col>
    <div use:toast.success>
      <button use:btn.clear use:spectre={"float-right"}></button>
      <p>Toast success</p>
    </div>
  </div>
  <div use:column>
    <div use:toast.warning>
      <button use:btn.clear use:spectre={"float-right"}></button>
      <p>Toast warning</p>
    </div>
  </div>
  <div use:column>
    <div use:toast.error>
      <button use:btn.clear use:spectre={"float-right"}></button>
      <p>Toast error</p>
    </div>
  </div>
</div>
```

And you can add the `primary`, `success`, `warning` or `error` property for additional toast colors.
