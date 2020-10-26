# Breadcrumbs

[Breadcrumbs](https://picturepan2.github.io/spectre/components/breadcrumbs.html) are used as navigational hierarchies to indicate current location.

```example
<script>
  import { breadcrumb, tooltip, cols, col } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col>
    <ul use:breadcrumb>
      <li use:breadcrumb.item>
        <a use:tooltip={"Home"} href="#breadcrumbs" on:click|preventDefault>Home</a>
      </li>
      <li use:breadcrumb.item>
        <a use:tooltip={"Settings"} href="#breadcrumbs" on:click|preventDefault>Settings</a>
      </li>
    </ul>
  </div>
  <div use:col>
    <ul use:breadcrumb>
      <li use:breadcrumb.item>
        <a use:tooltip={"Home"} href="#breadcrumbs" on:click|preventDefault>Home</a>
      </li>
      <li use:breadcrumb.item>
        <a use:tooltip={"Settings"} href="#breadcrumbs" on:click|preventDefault>Settings</a>
      </li>
      <li use:breadcrumb.item>
        <a use:tooltip={"Change avatar"} href="#breadcrumbs" on:click|preventDefault>Change avatar</a>
      </li>
    </ul>
  </div>
  <div use:col>
    <ul use:breadcrumb>
      <li use:breadcrumb.item>
        <a use:tooltip={"Home"} href="#breadcrumbs" on:click|preventDefault>Home</a>
      </li>
      <li use:breadcrumb.item>
        <a use:tooltip={"Settings"} href="#breadcrumbs" on:click|preventDefault>Settings</a>
      </li>
      <li use:breadcrumb.item>Search result:
        <a use:tooltip={"Spectre"} href="#breadcrumbs" on:click|preventDefault>Spectre</a>
      </li>
    </ul>
  </div>
</div>
```

Apply the `use:breadcrumb` action to an element and `use:breadcrumb.item` to its child elements.
