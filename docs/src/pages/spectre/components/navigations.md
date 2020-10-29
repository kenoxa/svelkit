# Nav

<!-- #TODO: fix links -->

```example
<script>
  import { nav, cols, col, active } from "@svelkit/spectre";
</script>

<div use:cols>
  <div use:col={[12,6]}>
    <ul use:nav>
      <li use:nav.item><a href="#nav" on:click|preventDefault>Elements</a></li>
      <li use:nav.item={"active"}><a href="#nav" on:click|preventDefault>Layout</a>
        <ul use:nav>
          <li use:nav.item><a href="#nav" on:click|preventDefault>Flexbox grid</a></li>
          <li use:nav.item><a href="#nav" on:click|preventDefault>Responsive</a></li>
          <li use:nav.item><a href="#nav" on:click|preventDefault>Navbar</a></li>
          <li use:nav.item><a href="#nav" on:click|preventDefault>Empty states</a></li>
        </ul>
      </li>
      <li use:nav.item><a href="#nav" on:click|preventDefault>Components</a></li>
      <li use:nav.item><a href="#nav" on:click|preventDefault>Utilities</a></li>
    </ul>
  </div>
</div>
```

Add the `use:nav` action to a container element. And add `use:nav.item` to the child elements. The nav-item with the active class will be highlighted.

<!-- #TODO: fix active class -->
