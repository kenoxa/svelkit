# Tabs

[Tabs](https://picturepan2.github.io/spectre/components/tabs.html) enable quick switch between different views.

```example
<script>
  import { tab, cols, col } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col={[12,6]}>
    <ul use:tab>
      <li use:tab.item={{state: "active"}}>
        <a href="#tabs">Music</a></li>
      <li use:tab.item>
        <a href="#tabs">Playlists</a></li>
      <li use:tab.item>
        <a href="#tabs">Radio</a></li>
      <li use:tab.item>
        <a href="#tabs">Store</a></li>
    </ul>
  </div>
  <div use:col={[12,6]}>
    <ul use:tab use:tab.block>
      <li use:tab.item={{state: "active"}}>
        <a href="#tabs">Music</a></li>
      <li use:tab.item>
        <a href="#tabs">Playlists</a></li>
      <li use:tab.item>
        <a href="#tabs">Radio</a></li>
    </ul>
  </div>
</div>
```

Add the `use:tab` action to a container element. And add the `use:tab.item` action to child elements. You can add the `use:tab.block` for a full-width tab. The `use:tab.item` or its child `<a>` with the `state: "active"` will be highlighted.

```example
<script>
  import { tab, badge, cols, col } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col={[12,6]}>
    <ul use:tab>
      <li use:tab.item={{state: "active"}}>
        <a use:badge={"999"} href="#tabs">Music</a></li>
      <li use:tab.item>
        <a href="#tabs">Playlists</a></li>
      <li use:tab.item>
        <a href="#tabs">Radio</a></li>
      <li use:tab.item>
        <a href="#tabs">Store</a></li>
    </ul>
  </div>
  <div use:col={[12,6]}>
    <ul use:tab use:tab.block>
      <li use:tab.item={{state: "active"}}>
        <a href="#tabs">Music</a></li>
      <li use:tab.item>
        <a use:badge={"9"} href="#tabs">Playlists</a></li>
      <li use:tab.item>
        <a use:badge={"99"} href="#tabs">Radio</a></li>
    </ul>
  </div>
</div>
```

If you need `badges` on tabs, you can add the `use:badge` action to the element within tab-item.

```example
<script>
  import { tab, cols, col } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col={[12,6]}>
    <ul use:tab>
      <li use:tab.item={{state: "active"}}><a href="#tabs">Music<span use:btn btn-clear"></span></a></li>
      <li use:tab.item><a href="#tabs">Playlists</a></li>
      <li use:tab.item><a href="#tabs">Radio</a></li>
      <li use:tab.item><a href="#tabs">Store</a></li>
      <li use:tab.item use:tab.action">
        <div use:input.group use:input.inline">
          <input use:form.input={{size: "sm"}} type="text">
          <button use:btn={{variant: "primary", size: "sm"}} use:input.groupBtn>Search</button>
        </div>
      </li>
    </ul>
  </div>
</div>
```

You could add a search box or buttons inside a tab. Add the `use:tab.action` action to the tab-item.
