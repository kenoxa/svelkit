# Chips

[Chips](https://picturepan2.github.io/spectre/components/chips.html) are complex entities in small blocks.

Apply the `breadcrumb` action to an element and add child text element, [buttons](spectre/buttons) or [avatars](spectre/avatars).

```example
<script>
  import { chip, btn, avatar } from '@svelkit/spectre'
</script>

<span use:chip>Crime</span>
<span use:chip>Drama</span>
<span use:chip>Biography <button use:btn={'clear'} aria-label="Close"></button></span>
<span use:chip>Mystery <button use:btn={'clear'} aria-label="Close"></button></span>
<span use:chip>
  <figure use:avatar={{size: 'sm', initial: 'TS'}}></figure>
  Tony Stark
  <button use:btn={'clear'} aria-label="Close"></button>
</span>
<span use:chip>
  <figure use:avatar={'sm'}>
    <img src="https://picturepan2.github.io/spectre/img/avatar-1.png" alt="">
  </figure>
  Steve Rogers
  <button use:btn={'clear'} aria-label="Close"></button>
</span>
```

## Active State

```example
<script>
  import { chip } from '@svelkit/spectre'

  let active = true
</script>

<span use:chip={{ active }}>{active ? 'is' : 'not'} active</span>

<label>
  Toggle active
  <input type=checkbox bind:checked={active}>
</label>
```
