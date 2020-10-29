# Badges

[Badges](https://picturepan2.github.io/spectre/components/badges.html) are often used as unread number indicators.

```example
<script>
  import { badge, cols, col } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col={[12,6]}>
    <span use:badge>Notifications</span>
    <span use:badge={8}>Notifications</span>
  </div>
</div>
```

Add `use:badge` to non self closing elements. The parameter defines the content of a badge. The badge will appear in the top-right direction of the element.

If there is no `data-badge` or the parameter is not specified, the badge will appear as a dot.

```example
<script>
  import { badge, avatar, btn, cols, col } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col>
    <button use:btn use:badge>Button</button>
    <button use:btn use:badge={8}>Button</button>
  </div>
  <div use:col>
    <button use:btn.primary use:badge>Button</button>
    <button use:btn.primary use:badge={8}>Button</button>
  </div>
  <div use:col>
    <figure use:avatar={{initial: 'YZ', size: "xl"}} use:badge={8}>
      <img src="https://picturepan2.github.io/spectre/img/avatar-1.png" alt="YZ">
    </figure>
    <figure use:avatar={{initial: 'YZ', size: "lg"}} use:badge={8}>
      <img src="https://picturepan2.github.io/spectre/img/avatar-2.png" alt="YZ">
    </figure>
    <figure use:avatar={{initial: 'YZ'}} use:badge={8}>
      <img src="https://picturepan2.github.io/spectre/img/avatar-3.png" alt="YZ">
    </figure>
  </div>
</div>
```

Badges support [button](spectre/buttons) and [avatars](spectre//avatars) elements as well.

## Playground

```example
<script>
  import { Knobs } from '@svelkit/docs'

  import { badge } from '@svelkit/spectre'

  let state = { value: undefined }
</script>

<span use:badge={state.value}>Notifications</span>

<Knobs bind:state={state} config={{
  value: { size: 5 }
}} />
```
