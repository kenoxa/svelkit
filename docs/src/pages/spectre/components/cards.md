# Cards

[Cards](https://picturepan2.github.io/spectre/components/cards.html) are flexible content containers.

```example
<script>
  import { card, cols, col, btn, img, h5, text, spectre } from "@svelkit/spectre";
</script>

<div use:cols>
  <div use:col={[12,6,,4]}>
    <div use:card.shadow>
      <div use:card.image>
        <img use:img.responsive src="https://picturepan2.github.io/spectre/img/osx-el-capitan.jpg" alt="OS X El Capitan">
      </div>
      <div use:card.header>
        <div use:h5>Microsoft</div>
        <div use:text.gray>Software and hardware</div>
      </div>
      <div use:card.body>Empower every person and every organization on the planet to achieve more.</div>
      <div use:card.footer>
        <a use:btn.primary href="#cards">Do</a>
      </div>
    </div>
  </div>
  <div use:col={[12,6,,4]}>
    <div use:card.shadow>
      <div use:card.header>
        <div use:h5>Apple</div>
        <div use:text.gray>Hardware and software</div>
      </div>
      <div use:card.image>
        <img use:img.responsive src="https://picturepan2.github.io/spectre/img/osx-yosemite.jpg" alt="OS X Yosemite">
      </div>
      <div use:card.body>To make a contribution to the world by making tools for the mind that advance humankind.</div>
      <div use:card.footer>
        <div use:spectre={'btn-group btn-group-block'}>
          <button use:btn.primary>Buy</button>
          <button use:btn>Buy</button>
          <button use:btn>Buy</button>
        </div>
      </div>
    </div>
  </div>
  <div use:col={[12,6,,4]}>
    <div use:card.shadow>
      <div use:card.image>
        <img use:img.responsive src="https://picturepan2.github.io/spectre/img/macos-sierra-2.jpg" alt="macOS Sierra">
      </div>
      <div use:card.header>
        <button use:btn.primary use:spectre={"float-right"}>
          <i class="icon icon-plus">

        </i>
        </button>
        <div use:h5>Google I/O</div>
        <div use:text.gray>Software and hardware</div>
      </div>
      <div use:card.body>An immersive, three-day experience focused on exploring the next generation of technology, mobile and beyond.</div>
    </div>
  </div>
  <div use:col={[12,6,,4]}>
    <div use:card.shadow>
      <div use:card.image>
        <img use:img.responsive src="https://picturepan2.github.io/spectre/img/osx-el-capitan-2.jpg" alt="OS X El Capitan">
      </div>
      <div use:card.footer>
        <a use:btn.primary href="#cards">Buy</a>
        <a use:btn.link href="#cards">Share</a>
      </div>
      <div use:card.body>
        <strong>Surface Studio</strong>. Turn your desk into a Studio. Surface Studio is designed for the creative process.</div>
    </div>
  </div>
  <div use:col={[12,6,,4]}>
    <div use:card.shadow>
      <div use:card.header>
        <div use:h5>Apple</div>
        <div use:text.gray>Hardware and software</div>
      </div>
      <div use:card.body>To make a contribution to the world by making tools for the mind that advance humankind.</div>
      <div use:card.image>
        <img use:img.responsive src="https://picturepan2.github.io/spectre/img/macos-sierra.jpg" alt="macOS Sierra">
      </div>
    </div>
  </div>
  <div use:col={[12,6,,4]}>
    <div use:card.shadow>
      <div use:card.header>
        <div use:h5>Google</div>
        <div use:text.gray>Software and hardware</div>
      </div>
      <div use:card.body>Organize the world’s information and make it universally accessible and useful.</div>
      <div use:card.image>
        <img use:img.responsive src="https://picturepan2.github.io/spectre/img/osx-yosemite-2.jpg" alt="OS X Yosemite">
      </div>
      <div use:card.footer>
        <a use:btn.primary href="#cards">Search</a>
        <a use:btn.link href="#cards">Share</a>
      </div>
    </div>
  </div>
</div>
```

Apply the `use:card` action on a container element and add `use:card.image`, `use:card.header`, `use:card.body` and/or `use:card.footer` actions to child elements. The card-image can be placed in any position.

Use the `shadow` property on the card to add box-shadow: `use:card.shadow`.
