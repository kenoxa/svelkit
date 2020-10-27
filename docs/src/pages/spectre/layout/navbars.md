# Navbars

[Navbars](https://picturepan2.github.io/spectre/layout/navbar.html) are layout containers that appears in the header of apps and websites.

```example
<script>
  import { navbar, cols, col, btn, form, input, text, display } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col>
    <div use:navbar>
      <div use:navbar.section>
        <a use:navbar.brand href="#navbar">SPECTRE.CSS</a>
        <a use:btn.link href="#navbar">Docs</a>
        <a use:btn.link href="https://github.com/picturepan2/spectre">GitHub</a>
      </div>
      <div use:navbar.section>
        <div use:input.group use:input.inline>
          <input use:form.input type="text" placeholder="search">
          <button use:btn.primary use:input.groupBtn>Search</button>
        </div>
      </div>
    </div>
  </div>
</div>
```

<!-- #TODO: add text-bold mr-2 to brand in the example above -->

You can use `use:navbar.center` class to have a centered section.

```example
<script>
  import { navbar, cols, col, btn, form, input, text } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col>
    <div use:navbar>
      <div use:navbar.section>
        <a use:btn.link href="#navbar">Docs</a>
        <a use:btn.link href="#navbar">Examples</a>
      </div>
      <div use:navbar.center>
        <img src="static/spectre-logo.svg" alt="Spectre.css">
      </div>
      <div use:navbar.section>
        <a use:btn.link href="https://twitter.com/spectrecss">Twitter</a>
        <a use:btn.link href="https://github.com/picturepan2/spectre">GitHub</a>
      </div>
    </div>
  </div>
</div>
```
