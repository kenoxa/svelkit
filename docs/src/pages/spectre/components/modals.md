# Modals

[Modals](https://picturepan2.github.io/spectre/components/modals.html) are flexible dialog prompts.

```example
<script>
  import { modal, cols, col, btn, h5, spectre } from "@svelkit/spectre";
</script>

<div use:cols>
  <div use:col>
    <a use:btn.primary href="#example-modal-1" on:click|preventDefault>Open Modal</a>
    <div use:modal id="example-modal-1" >
      <a use:modal.overlay href="#modals" aria-label="Close" on:click|preventDefault></a>
      <div use:modal.container role="document">
        <div use:modal.header>
            <a use:btn.clear use:spectre={"float-right"} href="#modals" aria-label="Close" on:click|preventDefault></a>
          <div use:modal.title use:h5>Modal title</div>
        </div>
        <div use:modal.body>
          <div use:col>
            <p>This is the content inside the modal.</p>
            <h4>Lorem ipsum</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo, dictum in vehicula sit amet, feugiat tempus tellus. Duis quis sodales risus. Etiam euismod ornare consequat.</p>
            <p>Climb leg rub face on everything give attitude nap all day for under the bed. Chase mice attack feet but rub face on everything hopped up on goofballs.</p>
            <h4>Cupcake ipsum</h4>
            <p>Jelly-o sesame snaps halvah croissant oat cake cookie. Cheesecake bear claw topping. Chupa chups apple pie carrot cake chocolate cake caramels.</p>
            <p>De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris. Hi brains mindless mortuis limbic cortex soulless creaturas optic nerve.</p>
            <h4>Candy ipsum</h4>
            <p>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar.</p>
            <p>Caerphilly swiss fromage frais. Brie cheese and wine fromage frais chalk and cheese danish fontina smelly cheese who moved my cheese cow.</p>
          </div>
        </div>
        <div use:modal.footer>
          <button use:btn.primary>Share</button>
            <a use:btn.link href="#modals">Close</a>
        </div>
      </div>
    </div>
  </div>
</div>
```

<!-- Add `use:modal` on a container element. And add `use:modal.container` on a real container and an overlay with the `use:modal.overlay` action inside it. You can add child elements with the `use:modal.header`, `use:modal.body` and `use:modal.footer` - any or all of them.

JavaScript code is not included, so you will need to implement your JS to interact with modals. To make a modal appear, pass the `active` property to the `use:modal` action on the modal container.

## Modal sizes

```example
<script>
  import { modal, cols, col, form, btn } from "@svelkit/spectre";
</script>

<div use:cols>
  <div use:col={[12,6]}>
    <a class="btn btn-primary" href="#example-modal-2">Open small size Modal</a>
    <div use:modal={{size: "sm"}} id="example-modal-2">
        <a use:modal.overlay href="#modals-sizes" aria-label="Close" on:click|preventDefault></a>
      <div use:modal.container role="document">
        <div use:modal.header>
            <a class="btn btn-clear float-right" href="#modals-sizes" aria-label="Close" on:click|preventDefault></a>
          <div use:modal.title use:h5>Modal title</div>
        </div>
        <div use:modal.body>
          <div use:col>
            <form>
              <div use:form.group>
                <label use:form.label for="input-example-7">Name</label>
                <input use:form.input id="input-example-7" type="text" placeholder="Name">
              </div>
              <div use:form.group>
                <label use:form.label>Gender</label>
                <label use:form.radio>
                  <input type="radio" name="gender"><i use:form.icon></i> Male
                </label>
                <label use:form.radio>
                  <input type="radio" name="gender" checked=""><i use:form.icon></i> Female
                </label>
              </div>
            </form>
          </div>
        </div>
        <div use:modal.footer>
          <button use:btn.primary>Submit</button>
            <a use:btn.link href="#modals-sizes" aria-label="Close">Close</a>
        </div>
      </div>
    </div>
  </div>
</div>
```

Use the `size: sm` property for a smaller modal dialog. The container max width is `320px`.

```example
<script>
  import { modal, cols, col, form, h5, btn, spectre } from "@svelkit/spectre";
</script>

<div use:cols>
  <div use:col>
      <a use:btn.primary href="#example-modal-3">Open large size Modal</a>
    <div use:modal={{size: "lg"}} id="example-modal-3">
        <a use:modal.overlay href="#modals-sizes" aria-label="Close" on:click|preventDefault></a>
      <div use:modal.container role="document">
        <div use:modal.header>
            <a use:btn.clear use:spectre={"float-right"} href="#modals-sizes" aria-label="Close" on:click|preventDefault></a>
          <div use:modal.title use:h5>Modal title</div>
        </div>
        <div use:modal.body>
          <div use:col>
            <p>This is the content inside the modal.</p>
            <h4>Lorem ipsum</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo, dictum in vehicula sit amet, feugiat tempus tellus. Duis quis sodales risus. Etiam euismod ornare consequat.</p>
            <p>Climb leg rub face on everything give attitude nap all day for under the bed. Chase mice attack feet but rub face on everything hopped up on goofballs.</p>
            <h4>Cupcake ipsum</h4>
            <p>Jelly-o sesame snaps halvah croissant oat cake cookie. Cheesecake bear claw topping. Chupa chups apple pie carrot cake chocolate cake caramels.</p>
            <p>De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris. Hi brains mindless mortuis limbic cortex soulless creaturas optic nerve.</p>
            <h4>Candy ipsum</h4>
            <p>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar.</p>
            <p>Caerphilly swiss fromage frais. Brie cheese and wine fromage frais chalk and cheese danish fontina smelly cheese who moved my cheese cow.</p>
          </div>
        </div>
        <div use:modal.footer>
          <button use:btn.primary>Share</button>
            <a use:btn.link href="#modals-sizes">Close</a>
        </div>
      </div>
    </div>
  </div>
</div>
```

Use the `size: lg` property for a full size modal. The container max width is `960px`. -->
