# Badges

[Badges](https://picturepan2.github.io/spectre/components/badges.html) are often used as unread number indicators.

Add the `badge` action to non self closing elements. The parameter defines the content of a badge. The badge will appear in the top-right direction of the element.

If there is no `data-badge` or the parameter is not specified, the badge will appear as a dot.

```example
<script>
  import { badge } from '@svelkit/spectre'
</script>

<span use:badge>Notifications</span>

<span use:badge={8}>Notifications</span>
```

Badges support [button](spectre/buttons) and [avatars](spectre//avatars) elements as well.

```example
<script>
  import { badge, btn } from '@svelkit/spectre'
</script>

<button use:btn use:badge>Button</button>
<button use:btn use:badge={8}>Button</button>
```

```example
<script>
  import { badge, avatar } from '@svelkit/spectre'
</script>

<figure use:avatar={{initial: 'YZ'}} use:badge={8}>
  <img src="https://picturepan2.github.io/spectre/img/avatar-3.png" alt="YZ">
</figure>
```
