# Chips

My chip component

## Usage

```example
<script>
  import { chip } from '@svelkit/spectre'

  let active = true
</script>

<label>
  Toggle active
  <input type=checkbox bind:checked={active}>
</label>

<div use:chip="{{ active }}">may be active</div>

<div use:chip>not active</div>
```

## Properties

```properties
active | Make chip active | bool(false)
```
