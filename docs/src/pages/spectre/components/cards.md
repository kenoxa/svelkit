# Cards

[Cards](https://picturepan2.github.io/spectre/components/cards.html) are flexible content containers.

## Usage

Apply the `card` action on a container element and add `card.image`, `card.header`, `card.body` and/or `card.footer` actions to child elements. The `card.image` can be placed in any position.

```example
<script>
  import { card, btn, img, heading, text, container, columns, col, spectre } from '@svelkit/spectre'
</script>

<div use:container>
  <div use:columns>
    <div use:col={[12, 6]}>
      <div use:card>
        <div use:card={'image'}>
          <img use:img={'responsive'} src="https://picturepan2.github.io/spectre/img/osx-el-capitan.jpg" alt="">
        </div>
        <div use:card={'header'}>
          <div use:heading={5}>Microsoft</div>
          <div use:text={'gray'}>Software and hardware</div>
        </div>
        <div use:card={'body'}>
          Empower every person and every organization on the planet to achieve more.
        </div>
        <div use:card={'footer'}>
          <button use:btn={'primary'}>Do</button>
        </div>
      </div>
    </div>
    <div use:col={[12, 6]}>
      <div use:card={'shadow'}>
        <div use:card={'header'}>
          <div use:heading={5}>Apple</div>
          <div use:text={'gray'}>Hardware and software</div>
        </div>
        <div use:card={'image'}>
          <img use:img={'responsive'} src="https://picturepan2.github.io/spectre/img/osx-yosemite.jpg" alt="">
        </div>
        <div use:card={'body'}>
          To make a contribution to the world by making tools for the mind that advance humankind.
        </div>
        <div use:card={'footer'}>
          <div use:spectre={'btn-group btn-group-block'}>
            <button use:btn={'primary'}>Buy</button>
            <button use:btn>Buy</button>
            <button use:btn>Buy</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```
