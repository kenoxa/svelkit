# Breadcrumbs

[Breadcrumbs](https://picturepan2.github.io/spectre/components/breadcrumbs.html) are used as navigational hierarchies to indicate current location.

Apply the `breadcrumb` action to an element and `breadcrumb.item` to its child elements.

```example
<script>
  import { breadcrumb, btn } from '@svelkit/spectre'
</script>

<ul use:breadcrumb>
  <li use:breadcrumb.item>
    <button use:btn>Home</button>
  </li>
  <li use:breadcrumb.item>
    <button use:btn>Settings</button>
  </li>
  <li use:breadcrumb.item>
    Search result:
    <button use:btn>Spectre</button>
  </li>
</ul>
```
