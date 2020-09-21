# Avatars

[Avatars](https://picturepan2.github.io/spectre/components/avatars.html) are user profile pictures..

Apply the `avatar` action to an element. There are 4 additional sizes available, including `xl` (64px), `lg` (48px), `sm` (24px), and `xs` (16px). By default, the avatar size is 32px.

For users who don't have profile pictures, you may use their initials for avatars. The `initial` property is the value inside the avatar when avatar image is unavailable or not fully loaded.

```example
<script>
  import { avatar } from '@svelkit/spectre'
</script>

<!-- Using images -->
<figure use:avatar={'xl'}>
  <img src="https://picturepan2.github.io/spectre/img/avatar-1.png" alt="Avatar XL">
</figure>
<figure use:avatar={'lg'}>
  <img src="https://picturepan2.github.io/spectre/img/avatar-2.png" alt="Avatar LG">
</figure>
<figure use:avatar>
  <img src="https://picturepan2.github.io/spectre/img/avatar-3.png" alt="Avatar">
</figure>
<figure use:avatar={'sm'}>
  <img src="https://picturepan2.github.io/spectre/img/avatar-4.png" alt="Avatar SM">
</figure>
<figure use:avatar={'xs'}>
  <img src="https://picturepan2.github.io/spectre/img/avatar-5.png" alt="Avatar XS">
</figure>

<!-- Using initials -->
<figure use:avatar={{size: 'xl', initial: 'YZ'}}></figure>
<figure use:avatar={{size: 'lg', initial: 'YZ'}}></figure>
<figure use:avatar={{initial: 'YZ'}}></figure>
<figure use:avatar={{size: 'sm', initial: 'YZ'}}></figure>
<figure use:avatar={{size: 'xs', initial: 'YZ'}}></figure>
```

## Avatar icons

```example
<script>
  import { avatar } from '@svelkit/spectre'
</script>

<figure use:avatar={'xl'}>
  <img src="https://picturepan2.github.io/spectre/img/avatar-1.png" alt="...">
  <img src="https://picturepan2.github.io/spectre/img/avatar-5.png" use:avatar={'icon'} alt="...">
</figure>
```

## Avatar presence

Avatars support presence indicators. You can add an `<i>` element with the `presence` variant, and add `online`, `busy` or `away` class for different status colors. The default is gray which means offline.

```example
<script>
  import { avatar } from '@svelkit/spectre'
</script>

<figure use:avatar={'xl'}>
  <img src="https://picturepan2.github.io/spectre/img/avatar-1.png" alt="...">
  <i use:avatar={'presence online'}></i>
</figure>

<figure use:avatar={'xl'}>
  <img src="https://picturepan2.github.io/spectre/img/avatar-2.png" alt="...">
  <i use:avatar={'presence busy'}></i>
</figure>

<figure use:avatar={'xl'}>
  <img src="https://picturepan2.github.io/spectre/img/avatar-3.png" alt="...">
  <i use:avatar={'presence away'}></i>
</figure>

<figure use:avatar={'xl'}>
  <img src="https://picturepan2.github.io/spectre/img/avatar-4.png" alt="...">
  <i use:avatar={'presence'}></i>
</figure>
```
