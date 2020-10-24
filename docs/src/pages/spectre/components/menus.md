# Menu

[Menus](https://picturepan2.github.io/spectre/components/menu.html) are vertical list of links or buttons for actions and navigation.

```example
<script>
  import { menu, tile, divider, active, cols, col, form, avatar } from "@svelkit/spectre";
</script>

<div use:cols>
  <div use:col={[12,4]}>
    <ul use:menu>
      <li use:menu.item>
        <div use:tile.centered>
          <div use:tile.icon>
            <img use:avatar src="https://picturepan2.github.io/spectre/img/avatar-4.png" alt="Avatar">
          </div>
          <div use:tile.content>Steve Rogers</div>
        </div>
      </li>
      <li use:divider></li>
      <li use:menu.item>
        <a use:active href="#menus">My profile</a>
        <div use:menu.badge>
          <label use:form.checkbox>
            <input type="checkbox"><i use:form.icon></i>Public
          </label>
        </div>
      </li>
      <li use:menu.item>
        <a href="#menus">Settings</a>
        <div use:menu.badge>
          <label class="label label-primary">2</label>
        </div>
      </li>
      <li use:menu.item>
        <a href="#menus">Logout</a></li>
    </ul>
  </div>
  <div use:col={[12,4]}>
    <ul use:menu>
      <li class="divider" data-content="LINKS"></li>
      <li use:menu.item>
        <a href="#menus">Slack</a></li>
      <li use:menu.item>
        <a href="#menus">Hipchat</a></li>
      <li use:menu.item>
        <a href="#menus">Skype</a></li>
    </ul>
  </div>
  <div use:col={[12,4]}>
    <ul use:menu>
      <li use:menu.item>
        <label use:form.checkbox>
          <input type="checkbox" checked=""><i use:form.icon></i> form-checkbox
        </label>
      </li>
      <li use:menu.item>
        <label use:form.radio>
          <input type="radio" checked=""><i use:form.icon></i> form-radio
        </label>
      </li>
      <li use:menu.item>
        <label use:form.switch>
          <input type="checkbox" checked=""><i use:form.icon></i> form-switch
        </label>
      </li>
    </ul>
  </div>
</div>
```

Add the `use:menu` action to a container element. And add child elements with the `use:menu.item` action. You can separate menu items with a divider. Add the `use:dividier` action to an element.

Menus also have [form controls](https://picturepan2.github.io/spectre/elements/forms.html) support:

- checkbox
- radio
- checkbox

## Dropdown menu

The dropdown is a combination of buttons and menus.

```example
<script>
  import { dropdown, menu, cols, col, btn } from "@svelkit/spectre";
</script>

<div use:cols>
  <div use:col>
    <div use:dropdown>
      <div use:btn.group>
        <button use:btn.primary>dropdown button</button>
        <button use:btn.primary use:dropdown.toggle>
          <i class="icon icon-caret"></i>
        </button>
        <ul use:menu>
          <li use:menu.item>
            <a href="#dropdowns" on:click|preventDefault>Slack</a></li>
          <li use:menu.item>
            <a href="#dropdowns" on:click|preventDefault>Hipchat</a></li>
          <li use:menu.item>
            <a href="#dropdowns" on:click|preventDefault>Skype</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div use:col>
    <div use:dropdown>
      <button use:btn.link use:dropdown.toggle>dropdown button 
        <i class="icon icon-caret"></i>
      </button>
      <ul use:menu>
        <li use:menu.item>
          <a href="#dropdowns" on:click|preventDefault>Slack</a></li>
        <li use:menu.item>
          <a href="#dropdowns" on:click|preventDefault>Hipchat</a></li>
        <li use:menu.item>
          <a href="#dropdowns" on:click|preventDefault>Skype</a></li>
      </ul>
    </div>
  </div>
</div>

<br />
<br />
<br />
<br />
<br />
```

Dropdown menus component is built entirely in CSS. It is triggered by `:focus` event.

Add a container element with the `use:dropdown`. And add a focusable element with the `use:dropdown.toggle` for the button and a menu component right next to it. You also need to add tabindex to make the buttons focusable.

If the dropdown is close to the right edge of the browser, you can use `use:dropdown.right` to the container to prevent it appearing off screen.
