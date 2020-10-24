# Chips

[Chips](https://picturepan2.github.io/spectre/components/chips.html) are complex entities in small blocks.

```example
<script>
  import { chip, btn, avatar, cols, col } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col>
    <span use:chip>Crime</span>
    <span use:chip>Drama</span>
    <span use:chip>Biography <button use:btn={'clear'} aria-label="Close"></button></span>
    <span use:chip>Mystery <button use:btn={'clear'} aria-label="Close"></button></span>
  </div>
  <div use:col>  
    <span use:chip>
      <figure use:avatar={{size: 'sm', initial: 'TS'}}></figure>
      Tony Stark
    </span>
    <span use:chip>
        <img use:avatar={'sm'} src="https://picturepan2.github.io/spectre/img/avatar-1.png" alt="">
        Thor Odinson
    </span>
    <span use:chip>
        <img use:avatar={'sm'} src="https://picturepan2.github.io/spectre/img/avatar-4.png" alt="">
        Steve Rogers
    </span>
  </div>
</div>
```

Apply the `use:chip` action to an element and add child text element, [buttons](spectre/buttons) or [avatars](spectre/avatars).

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
