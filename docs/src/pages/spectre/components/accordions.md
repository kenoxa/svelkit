# Accordions

[Accordions](https://picturepan2.github.io/spectre/components/accordions.html) are used to toggle sections of content.

```example
<script>
  import { accordion, menu, cols, col } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col={[12,,6]}>
    <div use:accordion>
      <label use:accordion.header for="accordion-1">
        <i class="icon icon-arrow-right mr-1"></i>Elements
      </label>
      <input id="accordion-1" type="radio" name="accordion-radio" hidden checked>
      <div use:accordion.body>
        <ul use:menu use:menu.nav>
          <li use:menu.item><a href="#accordions" on:click|preventDefault>Element 1</a></li>
          <li use:menu.item><a href="#accordions" on:click|preventDefault>Element 2</a></li>
        </ul>
      </div>
    </div>
    <div use:accordion>
      <input id="accordion-2" type="radio" name="accordion-radio" hidden>
      <label use:accordion.header for="accordion-2">
        <i class="icon icon-arrow-right mr-1"></i>Layout
      </label>
      <div use:accordion.body>
        <ul use:menu use:menu.nav>
          <li use:menu.item><a href="#accordions" on:click|preventDefault>Layout 1</a></li>
          <li use:menu.item><a href="#accordions" on:click|preventDefault>Layout 2</a></li>
        </ul>
      </div>
    </div>
    <div use:accordion>
      <input id="accordion-3" type="radio" name="accordion-radio" hidden>
      <label use:accordion.header for="accordion-3">
        <i class="icon icon-arrow-right mr-1"></i>Components
      </label>
      <div use:accordion.body>
        <ul use:menu use:menu.nav>
          <li use:menu.item><a href="#accordions" on:click|preventDefault>Component 1</a></li>
          <li use:menu.item><a href="#accordions" on:click|preventDefault>Component 2</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div use:col={[12,,6]}>
    <div use:accordion>
      <input id="accordion-4" type="checkbox" name="accordion-checkbox" hidden checked>
      <label use:accordion.header for="accordion-4">#Elements</label>
      <div use:accordion.body>
        <ul use:menu use:menu.nav>
          <li use:menu.item><a href="#accordions" on:click|preventDefault>Element 1</a></li>
          <li use:menu.item><a href="#accordions" on:click|preventDefault>Element 2</a></li>
        </ul>
      </div>
    </div>
    <div use:accordion>
      <input id="accordion-5" type="checkbox" name="accordion-checkbox" hidden>
      <label use:accordion.header for="accordion-5">Layout</label>
      <div use:accordion.body>
        <ul use:menu use:menu.nav>
          <li use:menu.item><a href="#accordions" on:click|preventDefault>Layout 1</a></li>
          <li use:menu.item><a href="#accordions" on:click|preventDefault>Layout 2</a></li>
        </ul>
      </div>
    </div>
    <div use:accordion>
      <input id="accordion-6" type="checkbox" name="accordion-checkbox" hidden>
      <label use:accordion.header c-hand for="accordion-6">Components</label>
      <div use:accordion.body>
        <ul use:menu use:menu.nav>
          <li use:menu.item><a href="#accordions" on:click|preventDefault>Component 1</a></li>
          <li use:menu.item><a href="#accordions" on:click|preventDefault>Component 2</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
```

Alternatively, you can use `details` and `summary` instead of `input` `radio` or `checkbox` trick. Add the `open` attribute to `details` to expand it.

```example
<script>
  import { accordion, menu, cols, col } from '@svelkit/spectre'
</script>

<!-- details and summary Accordions example -->
<div use:cols>
  <div use:col={[12,,6]}>
    <details use:accordion open>
      <summary use:accordion.header>
        <i class="icon icon-arrow-right mr-1"></i>
        Title
      </summary>
      <div use:accordion.body>
        <ul use:menu use:menu.nav>
          <li use:menu.item><a href="#accordions" on:click|preventDefault>Element 1</a></li>
          <li use:menu.item><a href="#accordions" on:click|preventDefault>Element 2</a></li>
        </ul>
      </div>
    </details>
  </div>
</div>
```
