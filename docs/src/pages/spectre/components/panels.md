# Panels

[Panels](https://picturepan2.github.io/spectre/components/panels.html) are flexible view container with auto-expand content section.

```example
<script>
  import { panel, tab, tile, btn, tooltip, form, input, avatar, h5, h6, text, cols, col, spectre } from "@svelkit/spectre";
</script>

<div use:cols>
  <div use:col>
    <div use:panel use:spectre={"mr-2"}>
      <div use:panel.header use:text.center>
        <figure use:avatar.lg>
          <img src="https://picturepan2.github.io/spectre/img/avatar-2.png" alt="Avatar">
        </figure>
        <div use:panel.title use:h5 use:spectre={"mt-10"}>Bruce Banner</div>
        <div use:panel.subtitle>THE HULK</div>
      </div>
      <nav use:panel.nav>
        <ul use:tab use:tab.block>
          <li use:tab.item={"active"}>
              <a href="#panels">Profile</a>
          </li>
          <li use:tab.item>
              <a href="#panels">Files</a>
          </li>
          <li use:tab.item>
              <a href="#panels">Tasks</a>
          </li>
        </ul>
      </nav>
      <div use:panel.body>
        <div use:tile.centered>
          <div use:tile.content>
            <div use:tile.title use:text.bold>E-mail</div>
            <div use:tile.subtitle>bruce.banner@hulk.com</div>
          </div>
          <div use:tile.action>
            <button use:btn={{variant: "link", size: "lg", action:true}} use:tooltip={{position: "left", value: "Edit E-mail"}}>
                <i class="icon icon-edit"></i>
              </button>
          </div>
        </div>
        <div use:tile.centered>
          <div use:tile.content>
            <div use:tile.title use:text.bold>Skype</div>
            <div use:tile.subtitle>bruce.banner</div>
          </div>
          <div use:tile.action>
            <button use:btn={{variant: "link", size: "lg", action: true}}>
                <i class="icon icon-edit"></i>
              </button>
          </div>
        </div>
        <div use:tile.centered>
          <div use:tile.content>
            <div use:tile.title use:text.bold>Location</div>
            <div use:tile.subtitle>Dayton, Ohio</div>
          </div>
          <div use:tile.action>
            <button use:btn={{variant: "link", size: "lg", action: true}}>
                <i class="icon icon-edit"></i>
              </button>
          </div>
        </div>
      </div>
    </div>
    <div use:panel>
      <div use:panel.header>
        <div use:panel.title use:h6>Comments</div>
      </div>
      <div use:panel.body>
        <div use:tile>
          <div use:tile.icon>
            <figure use:avatar>
                <img src="https://picturepan2.github.io/spectre/img/avatar-1.png" alt="Avatar">
              </figure>
          </div>
          <div use:tile.content>
            <p use:tile.title use:text.bold>Thor Odinson</p>
            <p use:tile.subtitle>Earth's Mightiest Heroes joined forces to take on threats that were too big for any one hero to tackle...</p>
          </div>
        </div>
        <div use:tile>
          <div use:tile.icon>
            <figure use:avatar>
                <img src="https://picturepan2.github.io/spectre/img/avatar-2.png" alt="Avatar">
              </figure>
          </div>
          <div use:tile.content>
            <p use:tile.title use:text.bold>Bruce Banner</p>
            <p use:tile.subtitle>The Strategic Homeland Intervention, Enforcement, and Logistics Division...</p>
          </div>
        </div>
        <div use:tile>
          <div use:tile.icon>
            <figure use:avatar.md={"TS"}></figure>
          </div>
          <div use:tile.content>
            <p use:tile.title use:text.bold>Tony Stark</p>
            <p use:tile.subtitle>Earth's Mightiest Heroes joined forces to take on threats that were too big for any one hero to tackle...</p>
          </div>
        </div>
        <div use:tile>
          <div use:tile.icon>
            <figure use:avatar>
                <img src="https://picturepan2.github.io/spectre/img/avatar-4.png" alt="Avatar">
              </figure>
          </div>
          <div use:tile.content>
            <p use:tile.title use:text.bold>Steve Rogers</p>
            <p use:tile.subtitle>The Strategic Homeland Intervention, Enforcement, and Logistics Division...</p>
          </div>
        </div>
        <div use:tile>
          <div use:tile.icon>
            <figure use:avatar>
                <img src="https://picturepan2.github.io/spectre/img/avatar-3.png" alt="Avatar">
              </figure>
          </div>
          <div use:tile.content>
            <p use:tile.title use:text.bold>Natasha Romanoff</p>
            <p use:tile.subtitle>Earth's Mightiest Heroes joined forces to take on threats that were too big for any one hero to tackle...</p>
          </div>
        </div>
      </div>
      <div use:panel.footer>
        <div use:input.group>
          <input use:form.input type="text" placeholder="Hello">
          <button use:btn.primary use:input.groupBtn>Send</button>
        </div>
      </div>
    </div>
  </div>
</div>


```

Add the `use:panel` action to a container element. And add `use:panel.header`, `use:panel.nav`, `use:panel.body` and/or `use:panel.footer` to the child elements. The `panel.body` can be auto expanded and vertically scrollable.
