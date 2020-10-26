# Bars

[Bars](https://picturepan2.github.io/spectre/components/bars.html) represent the progress of a task or the value within the known range. Bars are custom components for displaying HTML5 [`<progress>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress), [`<meter>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter) and input range elements.

## Normal Bars

```example
<script>
  import { bar, tooltip, cols, col, bg } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col={[8,12]}>
    <div use:bar.sm>
      <div use:bar.item={25} use:tooltip={"25%"}></div>
    </div>
  </div>
  <div use:col={[8,12]}>
    <div use:bar>
      <div use:bar.item={50} use:tooltip={"50%"}></div>
    </div>
  </div>
  <div use:col={[8,12]}>
    <div use:bar>
      <div use:bar.item={25} use:tooltip={"25%"}>25%</div>
      <div use:bar.item={15} use:tooltip={"15%"} use:bg={'success'}>15%</div>
      <div use:bar.item={10} use:tooltip={"10%"}>10%</div>
      <div use:bar.item={15} use:tooltip={"15%"} use:bg={'success'}>15%</div>
    </div>
  </div>
</div>
```

Add the `use:bar` action on a container element. And add child elements with the `use:bar.item` action. The width percentage value is needed for every bar-item.

There is the `sm` property for thinner Bars. Also, you could use Tooltips for any bar-item.

## Slider Bar

```example
<script>
  import { bar, tooltip, cols, col } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col={[8,12]}>
    <div use:bar.slider>
      <div use:bar.item={50}>
        <button use:bar.btn use:tooltip={'50%'}></button>
      </div>
    </div>
  </div>
  <div use:col={[8,12]}>
    <div use:bar.slider>
      <div use:bar.item={25}>
        <button use:bar.btn use:tooltip={'25%'}></button>
      </div>
      <div use:bar.item={65}>
        <button use:bar.btn use:tooltip={'65%'}></button>
      </div>
    </div>
  </div>
</div>
```

## Playground

```example
<script>
  import { Knobs } from '@svelkit/docs'

  import { bar } from '@svelkit/spectre'

  let state = { value: 23, min: 0, max: 100 }
</script>

<div use:bar>
  <div use:bar.item={state}>{state.value}</div>
</div>

<Knobs bind:state={state} config={{
  value: { type: 'number' },
  min: { type: 'number' },
  max: { type: 'number' },
}} />
```
