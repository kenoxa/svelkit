# Tiles

[Tiles](https://picturepan2.github.io/spectre/components/tiles.html) are repeatable or embeddable information blocks.

```example
<script>
  import { tile, avatar, cols, col, btn } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col={[12,9]}>
    <div use:tile>
      <div use:tile.icon>
        <figure use:avatar.lg>
          <img src="https://picturepan2.github.io/spectre/img/avatar-3.png" alt="Avatar"></figure>
      </div>
      <div use:tile.content>
        <p use:tile.title>The Avengers</p>
        <p use:tile.subtitle>Earth's Mightiest Heroes joined forces to take on threats that were too big for any one hero to tackle...</p>
      </div>
      <div use:tile.action>
        <button use:btn.primary>Join</button>
        <button use:btn>Contact</button>
      </div>
    </div>
  </div>  
  <div use:col={[12,9]}>
    <div use:tile>
      <div use:tile.icon>
        <figure use:avatar.lg>
          <img src="https://picturepan2.github.io/spectre/img/avatar-4.png" alt="Avatar">
        </figure>
      </div>
      <div use:tile.content>
        <p use:tile.title>The S.H.I.E.L.D.</p>
        <p use:tile.subtitle>The Strategic Homeland Intervention, Enforcement, and Logistics Division...</p>
        <p>
          <button use:btn={{variant: "primary", size: "sm"}}>Join</button>
          <button use:btn.sm>Contact</button>
        </p>
      </div>
    </div>
  </div>  
</div>
```

Add the `use:tile` action to a container. And add the `use:tile.icon`, `use:tile.content`, or/and `use:tile.action` to the child elements. The `use:tile.icon` and `use:tile.action` are optional.

There are `use:tile.title` and `use:tile.subtitle` classes for title and subtitle text styles.

## Compact tiles

There is compact version of Tiles component, which is often used as contact and file info blocks.

```example
<script>
  import { tile, text, cols, col } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col={[12,9,6]}>
    <div use:tile.centered>
      <div use:tile.icon>
        <div class="example-tile-icon">
          <i class="icon icon-mail centered">
        </i>
      </div>
      </div>
      <div use:tile.content>
        <div use:tile.title>spectre-docs.pdf</div>
        <small use:tile.subtitle use:text.gray>14MB · Public · 1 Jan, 2017</small>
      </div>
      <div use:tile.action>
        <button use:btn={{variant: "link", action: true}}>
          <i class="icon icon-more-vert"></i>
        </button>
      </div>
    </div>
  </div>
</div>
```

Add the `use:tile.centered` class to the container tile. The `use:tile.icon`, `use:tile.content` and `use:tile.action` will be vertically centered.
