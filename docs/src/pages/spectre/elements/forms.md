# Forms

[Forms](https://picturepan2.github.io/spectre/elements/forms.html) provide the most common control styles used in forms, including input, textarea, select, checkbox, radio and switch.

## Form input

```example
<script>
  import { form } from '@svelkit/spectre'
</script>

<!-- form input control -->
<div use:form.group>
  <label use:form.label for="input-example-1">Name</label>
  <input use:form.input type="text" id="input-example-1" placeholder="Name">
</div>

```

## Form textarea

```example
<script>
  import { form } from '@svelkit/spectre'
</script>

<!-- form textarea control -->
<div use:form.group>
  <label use:form.label for="input-example-3">Message</label><textarea use:form.input id="input-example-3" placeholder="Textarea" rows="3"></textarea>
</div>
```

## Form select

```example
<script>
  import { form } from '@svelkit/spectre'
</script>

<!-- form select control -->
<div use:form.group>
  <select use:form.select>
    <option>Choose an option</option>
    <option>Slack</option>
    <option>Skype</option>
    <option>Hipchat</option>
  </select>
</div>
```

## Form radio

```example
<script>
  import { form, baseline } from '@svelkit/spectre'
</script>

<!-- form radio control -->
<div use:form.group>
  <label use:form.label>Gender</label>
  <label use:form.radio>
    <input type="radio" name="gender" checked>
    <i use:form.icon /> Male
  </label>
  <label use:form.radio>
    <input type="radio" name="gender">
    <i use:form.icon /> Female
  </label>
</div>
```

## Form checkbox

```example
<script>
  import { form } from '@svelkit/spectre'
</script>

<!-- form checkbox control -->
<div use:form.group>
  <label use:form.checkbox>
    <input type="checkbox">
    <i use:form.icon />Remember me
  </label>
</div>
```

You can change checkbox to indeterminate state by setting the indeterminate property of input checkboxes to `true`.

## Inline forms

You can add the use:form.inline action to the form components to make them inline in one row.

```example
<script>
  import { form } from '@svelkit/spectre'
</script>

<div use:form.group>
  <label use:form.radio use:form.inline>
    <input type="radio" name="gender" checked="">
    <i use:form.icon /> Male
  </label>
  <label use:form.radio use:form.inline>
    <input type="radio" name="gender">
    <i use:form.icon /> Female
  </label>
</div>

<div use:form.group>
  <label use:form.checkbox use:form.inline>
    <input type="checkbox">
    <i use:form.icon /> Checkbox 1
  </label>
  <label use:form.checkbox use:form.inline>
    <input type="checkbox" checked="">
    <i use:form.icon /> Checkbox 2
  </label>
</div>
```

## Horizontal forms

If you want to have a horizontal form, add the use:form.horizontal action to the `<form>` container. And add the use:col action to the child elements for responsive form row layout.

```example
<script>
  import { form, cols, col, spectre } from '@svelkit/spectre'
</script>

<form use:form.horizontal autocomplete="off" action="#forms">
  <div use:form.group>
    <div use:col={[12, 3]}>
      <label use:form.label for="input-example-4">Name</label>
    </div>
    <div use:col={[12, 9]}>
      <input use:form.input id="input-example-4" type="text" placeholder="Name">
    </div>
  </div>
  <div use:form.group>
    <div use:col={[12, 3]}>
      <label use:form.label for="input-example-5">Email</label>
    </div>
    <div use:col={[12, 9]}>
      <input use:form.input id="input-example-5" type="email" placeholder="Email">
    </div>
  </div>
  <div use:form.group>
    <div use:col={[12, 3]}>
      <label use:form.label>Gender</label>
    </div>
    <div use:col={[12, 9]}>
      <label use:form.radio>
        <input type="radio" name="gender"><i use:form.icon></i> Male
      </label>
      <label use:form.radio>
        <input type="radio" name="gender" checked=""><i use:form.icon></i> Female
      </label>
    </div>
  </div>
  <div use:form.group>
    <div use:col={[12, 3]}>
      <label use:form.label>Source</label>
    </div>
    <div use:col={[12, 9]}>
      <select use:form.select multiple="">
        <option>Slack</option>
        <option>Skype</option>
        <option>Hipchat</option>
      </select>
    </div>
  </div>
  <div use:form.group>
    <div use:col={[12, 9]} use:spectre={"col-ml-auto"}>
      <label use:form.switch>
        <input type="checkbox"><i use:form.icon></i> Send me emails with news and tips
      </label>
    </div>
  </div>
  <div use:form.group>
    <div use:col={[12, 3]}>
      <label use:form.label for="input-example-6">Message</label>
    </div>
    <div use:col={[12, 9]}>
      <textarea use:form.input id="input-example-6" placeholder="Textarea" rows="3"></textarea>
    </div>
  </div>
  <div use:form.group>
    <div use:col={[12, 9]} use:spectre={"col-ml-auto"}>
      <label use:form.checkbox>
        <input type="checkbox"><i use:form.icon></i> Remember me
      </label>
    </div>
  </div>
</form>

```

## Form sizes

For smaller or larger input and select controls, you could pass the `size` property with the values to the elements.

```example
<script>
  import { form, cols, col } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col={[12,4]}>
    <label use:form.label={{size:"sm"}}>Label</label>
  </div>
  <div use:col={[12,4]}>
    <input use:form.input={{size:"sm"}} type="text" placeholder="Name">
  </div>
  <div use:col={[12,4]}>
    <select use:form.select={{size:"sm"}}>
      <option>Choose an option</option>
      <option>Slack</option>
      <option>Skype</option>
      <option>Hipchat</option>
    </select>
  </div>
  <div use:col={[12,4]}>
    <label use:form.label={{size: "lg"}}>Label</label>
  </div>
  <div use:col={[12,4]}>
    <input use:form.input={{size: "lg"}} type="text" placeholder="Name">
  </div>
  <div use:col={[12,4]}>
    <select use:form.select={{size: "lg"}}>
      <option>Choose an option</option>
      <option>Slack</option>
      <option>Skype</option>
      <option>Hipchat</option>
    </select>
  </div>
</div>
```

You can add the size property to the `use:form.checkbox`, `use:form.radio` and `use:form.switch` to have different sizes.

## Form icons

```example
<script>
  import { form, cols, col, has, tooltip  } from '@svelkit/spectre'
</script>

<!-- form input with Spectre icon -->
<div use:cols>
  <div use:col={[12,4]}>
    <div use:has.icon={"left"}>
      <input use:form.input={{size: "sm"}} type="text" placeholder="Name">
      <i use:form.icon class="icon icon-arrow-right"></i>
    </div>
  </div>
  <div use:col={[12,4]}>
    <div use:has.icon={"left"} use:tooltip={"Lorem ipsum dolor sit amet"}>
      <input use:form.input type="text" placeholder="Name">
      <i use:form.icon class="icon icon-arrow-right"></i>
    </div>
  </div>
  <div use:col={[12,4]}>
    <div use:has.icon={"left"}>
      <input use:form.input={{size: "lg"}} type="text" placeholder="Name">
      <i use:form.icon class="icon icon-arrow-right"></i>
    </div>
  </div>
  <div use:col={[12,4]}>
    <div use:has.icon={"right"}>
      <input use:form.input={{size:"sm"}}  type="text" placeholder="Name">
      <i use:form.icon class="icon icon-check"></i>
    </div>
  </div>
  <div use:col={[12,4]}>
    <div use:has.icon={"right"}>
      <input use:form.input type="text" placeholder="Name">
      <i use:form.icon class="icon icon-check"></i>
    </div>
  </div>
  <div use:col={[12,4]}>
    <div use:has.icon={"right"}>
      <input use:form.input={{size: "lg"}} type="text" placeholder="Name">
      <i use:form.icon class="icon icon-check"></i>
    </div>
  </div>
</div>
```

You can use the `loading` class for loading or posting state.

```example
<script>
  import { form, cols, col, has, tooltip  } from '@svelkit/spectre'
</script>

<!-- form input with loading icon -->
<div use:cols>
  <div use:col={[12,4]}>
    <div use:has.icon={"right"}>
      <input use:form.input={{size:"sm"}}  type="text" placeholder="Name">
      <i use:form.icon class="icon loading"></i>
    </div>
  </div>
  <div use:col={[12,4]}>
    <div use:has.icon={"right"}>
      <input use:form.input type="text" placeholder="Name">
      <i use:form.icon class="icon loading"></i>
    </div>
  </div>
  <div use:col={[12,4]}>
    <div use:has.icon={"right"}>
      <input use:form.input={{size: "lg"}} type="text" placeholder="Name">
      <i use:form.icon class="icon loading"></i>
    </div>
  </div>
</div>
```

## Input types

```example
<script>
  import { form, cols, col } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col={[12, 9]}>
    <form use:form.horizontal action="#forms">
      <div use:form.group>
        <div use:col={3}>
          <label use:form.label for="input-example-8">Email</label>
        </div>
        <div use:col={9}>
          <input use:form.input id="input-example-8" type="email" placeholder="Email" value="spectre@example.com" pattern="[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$">
        </div>
      </div>
      <div use:form.group>
        <div use:col={3}>
          <label use:form.label for="input-example-9">URL</label>
        </div>
        <div use:col={9}>
          <input use:form.input id="input-example-9" type="url" placeholder="URL" value="https://github.com/picturepan2/spectre">
        </div>
      </div>
      <div use:form.group>
        <div use:col={3}>
          <label use:form.label for="input-example-10">Search</label>
        </div>
        <div use:col={9}>
          <input use:form.input id="input-example-10" type="search" placeholder="Search">
        </div>
      </div>
      <div use:form.group>
        <div use:col={3}>
          <label use:form.label for="input-example-11">Tel</label>
        </div>
        <div use:col={9}>
          <input use:form.input id="input-example-11" type="tel" placeholder="Tel" value="1-(888)-888-8888">
        </div>
      </div>
      <div use:form.group>
        <div use:col={3}>
          <label use:form.label for="input-example-12">Password</label>
        </div>
        <div use:col={9}>
          <input use:form.input id="input-example-12" type="password" placeholder="Password" value="123456789">
        </div>
      </div>
      <div use:form.group>
        <div use:col={3}>
          <label use:form.label for="input-example-13">Number</label>
        </div>
        <div use:col={9}>
          <input use:form.input id="input-example-13" type="number" placeholder="00" value="66">
        </div>
      </div>
      <div use:form.group>
        <div use:col={3}>
          <label use:form.label for="input-example-14">Date</label>
        </div>
        <div use:col={9}>
          <input use:form.input id="input-example-14" type="date" value="2016-12-31">
        </div>
      </div>
      <div use:form.group>
        <div use:col={3}>
          <label use:form.label for="input-example-15">Color</label>
        </div>
        <div use:col={9}>
          <input use:form.input id="input-example-15" type="color" value="#5755d9">
        </div>
      </div>
      <div use:form.group>
        <div use:col={3}>
          <label use:form.label for="input-example-16">File</label>
        </div>
        <div use:col={9}>
          <input use:form.input id="input-example-16" type="file">
        </div>
      </div>
    </form>
  </div>
</div>
```

## Input groups

<!-- #TODO: figure out what influencese addon-sm/lg -->

```example
<script>
  import { form, input, cols, col, btn, baseline } from '@svelkit/spectre'
  baseline()
</script>

<form>
  <div use:cols>
    <div use:col={[12, 6]}>
      <div use:input.group>
        <input use:form.input={{size: "sm"}} type="text" placeholder="username">
        <select use:form.select={{size: "sm"}}>
          <option>Slack</option>
          <option>Skype</option>
          <option>Hipchat</option>
        </select>
      </div>
    </div>
    <div use:col={[12, 6]}>
      <div use:input.group={{inline: true}}><span use:input.groupAddon={{size: "sm"}}>slack.com/</span>
        <input use:form.input={{size: "sm"}} type="text" placeholder="site name">
        <button use:btn={{variant: "primary", size: "sm"}} use:input.groupBtn={{size: "sm"}}>Submit</button>
      </div>
    </div>
    <div use:col={[12, 6]}>
      <div use:input.group>
        <input use:form.input type="text" placeholder="username">
        <select use:form.select>
          <option>Slack</option>
          <option>Skype</option>
          <option>Hipchat</option>
        </select>
      </div>
    </div>
    <div use:col={[12, 6]}>
      <div use:input.group><span use:input.groupAddon>slack.com/</span>
        <input use:form.input type="text" placeholder="site name">
        <button use:btn={"primary"} use:input.groupBtn>Submit</button>
      </div>
    </div>
    <div use:col={[12, 6]}>
      <div use:input.group>
        <label use:form.switch>
          <input type="checkbox"><i use:form.icon></i>
        </label>
        <input use:form.input type="text" placeholder="name">
      </div>
    </div>
    <div use:col={[12, 6]}>
      <div use:input.group>
        <label use:form.checkbox>
          <input type="checkbox"><i use:form.icon></i>
        </label>
        <input use:form.input type="text" placeholder="name">
      </div>
    </div>
    <div use:col={[12, 6]}>
      <div use:input.group>
        <input use:form.input={{size: "lg"}} type="text" placeholder="username">
        <select use:form.select={{size: "lg"}}>
          <option>Slack</option>
          <option>Skype</option>
          <option>Hipchat</option>
        </select>
      </div>
    </div>
    <div use:col={[12, 6]}>
      <div use:input.group><span use:input.groupAddon={{size: "lg"}}>slack.com/</span>
        <input use:form.input={{size: "lg"}} type="text" placeholder="site name">
        <button use:btn={{variant: "primary", size: "lg"}} use:input.groupBtn>Submit</button>
      </div>
    </div>
  </div>
</form>
```

## Form validation styles

```example
<script>
  import { form, input, cols, col } from '@svelkit/spectre'
</script>

<form autocomplete="off" action="#forms">
  <fieldset>
    <legend>Input</legend>
    <div use:form.group>
      <label use:form.label for="input-example-17">Name</label>
      <!-- svelte-ignore component-name-lowercase -->
      <input use:form.input={{state: "success"}} id="input-example-17" type="text" placeholder="Name">
      <p use:input.hint>The name is valid.</p>
    </div>
    <div use:form.group={{state:"error"}}>
      <label use:form.label for="input-example-18">Password</label>
      <!-- svelte-ignore component-name-lowercase -->
      <input use:form.input id="input-example-18" type="password" placeholder="Password">
      <p use:form.hint>Passwords must have at least 8 characters.</p>
    </div>
  </fieldset>
  <fieldset>
    <legend>Select</legend>
    <div use:form.group>
      <select use:form.select={{state:"error"}}>
        <option>Choose an option</option>
        <option>Slack</option>
        <option>Skype</option>
        <option>Hipchat</option>
      </select>
      <p use:form.hint>The option is invalid.</p>
    </div>
    <div use:form.group={{state: "success"}}>
      <select use:form.select>
        <option>Choose an option</option>
        <option>Slack</option>
        <option>Skype</option>
        <option>Hipchat</option>
      </select>
      <p use:input.hint>The option is available.</p>
    </div>
  </fieldset>
  <fieldset>
    <legend>Checkbox, Radio and Switch (Error state only)</legend>
    <div use:form.group>
      <label use:form.checkbox={{state:"error"}}>
        <input type="checkbox" checked=""><i use:form.icon></i> I'm not a robot.
      </label>
    </div>
    <div use:form.group={{state:"error"}}>
      <label use:form.radio>
        <input type="radio" name="gender" checked=""><i use:form.icon></i> Male
      </label>
      <label use:form.radio>
        <input type="radio" name="gender"><i use:form.icon></i> Female
      </label>
    </div>
    <div use:form.group>
      <label use:form.switch={{state:"error"}}>
        <input type="checkbox" checked=""><i use:form.icon></i> Send me emails with news and tips
      </label>
    </div>
  </fieldset>
</form>
```

To use form validation styles, you can either pass an object with the property `state: "success"` or `state: "error"` as argument to the action. Use the `use:form.hint` or `use:input.hint` to provide form validation success and error messages.

```example
<script>
  import { form, input } from '@svelkit/spectre'
</script>

<form>
  <!-- form validation state: success -->
  <div use:form.group={{state: "success"}}>
    <label use:form.label for="input-example-1">Name</label>
    <input use:form.input type="text" id="input-example-1" placeholder="...">
    <p use:form.hint>The name is valid.</p>
  </div>

  <!-- form validation state: error -->
  <div use:form.group>
    <label use:form.label for="input-example-1">Name</label>
    <input use:form.input={{state: "error"}} type="text" id="input-example-1" placeholder="...">
    <p use:input.hint>The name is invalid.</p>
  </div>

  <!-- form validation example for checkbox, radio and switch -->
  <div use:form.group>
    <label use:form.checkbox={{state: "error"}}>
      <input type="checkbox">
      <i use:form.icon></i> Remember me
    </label>
  </div>
</form>
```

You can use input `pattern` attribute to validate the value as well.

```example
<form>
  <!-- pattern validation example for Email -->
  <input class="form-input" type="email" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,14}$">

  <!-- pattern validation example for password (8 or more characters that are of at least one number, and one uppercase and lowercase letter) -->
  <input class="form-input" type="password" placeholder="Password" pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8}$">
</form>
```

## Form disabled styles

Pass `disabled` as an argument to to the element or `<fieldset>` for a disabled form components style.

```example
<script>
  import { form, cols, col } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col={[12, 6]}>
    <form action="#forms">
      <fieldset disabled>
        <div use:form.group>
          <label use:form.label for="input-example-19">Name</label>
          <input use:form.input id="input-example-19" type="text" placeholder="Name">
        </div>
        <div use:form.group>
          <label use:form.label>Gender</label>
          <label use:form.radio>
            <input type="radio" name="gender" disabled=""><i use:form.icon></i> Male
          </label>
          <label use:form.radio>
            <input type="radio" name="gender" disabled=""><i use:form.icon></i> Female
          </label>
        </div>
        <div use:form.group>
          <select use:form.select disabled="">
            <option>Choose an option</option>
            <option>Slack</option>
            <option>Skype</option>
            <option>Hipchat</option>
          </select>
        </div>
        <div use:form.group>
          <label use:form.switch>
            <input type="checkbox" disabled=""><i use:form.icon></i> Send me emails with news and tips
          </label>
        </div>
        <div use:form.group>
          <label use:form.label for="input-example-20">Message</label>
          <textarea use:form.input id="input-example-20" placeholder="Textarea" rows="3" disabled=""></textarea>
        </div>
        <div use:form.group>
          <label use:form.check>
            <input type="checkbox" disabled=""><i use:form.icon></i> Remember me
          </label>
        </div>
      </fieldset>
    </form>
  </div>
</div>
```
