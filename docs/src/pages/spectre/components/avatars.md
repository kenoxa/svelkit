# Avatars

[Avatars](https://picturepan2.github.io/spectre/components/avatars.html) are user profile pictures..


```example
<script>
  import { avatar, cols, col, bg } from '@svelkit/spectre'
</script>

<!-- Basic avatar examples -->
<div use:cols>
  <div use:col={[12,6]}>
    <figure use:avatar.xl>
      <img src="https://picturepan2.github.io/spectre/img/avatar-1.png" alt="Avatar XL">
    </figure>
    <figure use:avatar.lg>
      <img src="https://picturepan2.github.io/spectre/img/avatar-2.png" alt="Avatar LG">
    </figure>
    <figure use:avatar>
      <img src="https://picturepan2.github.io/spectre/img/avatar-3.png" alt="Avatar">
    </figure>
    <figure use:avatar.sm>
      <img src="https://picturepan2.github.io/spectre/img/avatar-4.png" alt="Avatar SM">
    </figure>
    <figure use:avatar.xs>
      <img src="https://picturepan2.github.io/spectre/img/avatar-5.png" alt="Avatar XS">
    </figure>
  </div>
  <div use:col={[12,6]}>
    <figure use:avatar.xl={'YZ'}></figure>
    <figure use:avatar.lg={'YZ'} use:bg.dark></figure>
    <figure use:avatar.md={'YZ'} use:bg.success></figure>
    <figure use:avatar.sm={'YZ'} use:bg.error></figure>
    <figure use:avatar.xs={'YZ'} use:bg.warning>
      <img src="https://picturepan2.github.io/spectre/img/avatar-5.png" alt="Avatar XS">
    </figure>
  </div>
</div>
```

You can pass a value as a parameter to the `use:avatar` action instead of using an image.
Or you can pass an `object` with the property `initial: value` in combination with an image.

## Avatar sizes

There are `xs`, `sm`, `lg`, `xl` available:

- `xl`: 64px
- `lg`: 48px
- `sm`: 24px
- `xs`: 16px.

By `default`, the avatar size is 32px





## Avatar icons

```example
<script>
  import { avatar } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col={[12,6]}>
    <figure use:avatar.xl>
      <img src="https://picturepan2.github.io/spectre/img/avatar-1.png" alt="...">
      <img src="https://picturepan2.github.io/spectre/img/avatar-5.png" use:avatar.icon alt="...">
    </figure>
  </div>
</div>
```

Use the `use:avatar.icon` action on an element to display a small `icon` at the bottom right corner of the avatar.

## Avatar presence

```example
<script>
  import { avatar } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col={[12,6]}>
    <figure use:avatar.xl>
      <img src="https://picturepan2.github.io/spectre/img/avatar-1.png" alt="...">
      <i use:avatar.online></i>
    </figure>

    <figure use:avatar.xl>
      <img src="https://picturepan2.github.io/spectre/img/avatar-2.png" alt="...">
      <i use:avatar.busy></i>
    </figure>

    <figure use:avatar.xl>
      <img src="https://picturepan2.github.io/spectre/img/avatar-3.png" alt="...">
      <i use:avatar.away></i>
    </figure>

    <figure use:avatar.xl>
      <img src="https://picturepan2.github.io/spectre/img/avatar-4.png" alt="...">
      <i use:avatar.presence></i>
    </figure>
  </div>
</div>
```

Avatars support presence indicators. You can add an `<i>` element with the `presence` variant, and add `online`, `busy` or `away` class for different status colors. The default is gray which means offline.


## Playground

```example
<script>
  import { Knobs } from '@svelkit/docs'
  import { avatar } from '@svelkit/spectre'

  let state = { size: undefined, presence: undefined, initial: 'AB' }
</script>


<figure use:avatar={state.size}>
  <img src="https://picturepan2.github.io/spectre/img/avatar-5.png" alt="...">
  <i use:avatar.presence={state.presence}></i>
</figure>

<figure use:avatar={{size: state.size, initial: state.initial}}>
  <i use:avatar.presence={state.presence}></i>
</figure>

<Knobs bind:state={state} config={{
  size: { options: ['xs', 'sm', undefined, 'lg', 'xl'] },
  presence: { options: [undefined, 'online', 'busy', 'away'] },
  initial: { size: 2 }
}} />
```
