# Dividers

[Dividers](https://picturepan2.github.io/spectre/utilities/divider.html) are used for separating elements.

```example
<script>
  import { cols, col, divider } from '@svelkit/spectre'
</script>
<div use:cols>
  <div use:col>
    <div use:divider></div>
  </div>
</div>
```

```example
<script>
  import { cols, col, divider, text } from '@svelkit/spectre'
</script>
<div use:cols>
  <div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo, dictum in vehicula sit amet, feugiat tempus tellus.
    </p>
    <div use:divider={"OR"} use:text.center></div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo, dictum in vehicula sit amet, feugiat tempus tellus.
    </p>
  </div>
</div>
```

```example
<script>
  import { divider, cols, col, form, btn } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col={"auto"}>
    <form>
      <div use:form.group>
        <label use:form.label for="input-example-1">Email</label>
        <input use:form.input id="input-example-1" type="text" placeholder="Email">
      </div>
      <div use:form.group>
        <label use:form.label for="input-example-2">Password</label>
        <input use:form.input id="input-example-2" type="password" placeholder="Password">
      </div>
      <div use:form.group>
        <label use:form.checkbox>
          <input type="checkbox"><i use:form.icon></i> Remember me
        </label>
      </div>
      <div use:form.group>
        <button use:btn.primary>Sign in</button>
      </div>
    </form>
  </div>
  <div use:divider.vert={"OR"}></div>
  <div use:col={"auto"}>
    <form>
      <div use:form.group>
        <label use:form.label for="input-example-3">Email</label>
        <input use:form.input id="input-example-3" type="text" placeholder="Email">
      </div>
      <div use:form.group>
        <button use:btn={{variant: "primary", block: true}}>Sign up</button>
        <button use:btn={{variant: "link", block: true}}>Learn more</button>
      </div>
    </form>
  </div>
</div>
```
