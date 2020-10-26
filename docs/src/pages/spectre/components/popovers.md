# Popovers

[Popovers](https://picturepan2.github.io/spectre/components/popovers.html) are small overlay content containers. Popovers component is built entirely in CSS.

```example
<script>
  import { popover, card, cols, col, btn, h5, text } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col={[3,6]}>
    <div use:popover><a use:btn.primary href="#popovers">top popover</a>
      <div use:popover.container>
        <div use:card>
          <div use:card.header>
            <div use:card.title use:h5>Apple</div>
            <div use:card.subtitle use:text.gray>Software and hardware</div>
          </div>
          <div use:card.body>To make a contribution to the world by making tools for the mind that advance humankind.</div>
          <div use:card.footer>
            <button use:btn.primary>Buy</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div use:col={[3,6]}>
    <div use:popover.right><a use:btn.primary href="#popovers">right popover</a>
      <div use:popover.container>
        <div use:card>
          <div use:card.header>
            <div use:card.title use:h5>Apple</div>
            <div use:card.subtitle use:text.gray>Software and hardware</div>
          </div>
          <div use:card.body>To make a contribution to the world by making tools for the mind that advance humankind.</div>
          <div use:card.footer>
            <button use:btn.primary>Buy</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div use:col={[3,6]}>
    <div use:popover.bottom><a use:btn.primary href="#popovers">bottom popover</a>
      <div use:popover.container>
        <div use:card>
          <div use:card.header>
            <div use:card.title use:h5>Apple</div>
            <div use:card.subtitle use:text.gray>Software and hardware</div>
          </div>
          <div use:card.body>To make a contribution to the world by making tools for the mind that advance humankind.</div>
          <div use:card.footer>
            <button use:btn.primary>Buy</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div use:col={[3,6]}>
    <div use:popover popover-left><a use:btn.primary href="#popovers">left popover</a>
      <div use:popover-container>
        <div use:card>
          <div use:card.header>
            <div use:card.title use:h5>Apple</div>
            <div use:card.subtitle use:text.gray>Software and hardware</div>
          </div>
          <div use:card.body>To make a contribution to the world by making tools for the mind that advance humankind.</div>
          <div use:card.footer>
            <button use:btn.primary>Buy</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

Wrap an element by a container with the `use:popover` action. And add a container with the `use:popover.container` action next to the element. You can use Cards component inside the `use:popover.container`.

Also, you can add the `right`, `bottom` or `left` properties to define the position. By default, the popovers appear above the element.
