# Bars

[Bars](https://picturepan2.github.io/spectre/components/bars.html) represent the progress of a task or the value within the known range. Bars are custom components for displaying HTML5 [progress](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress), [meter](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter) and input range elements.

Apply the `bar` action to an element and `bar.item` to its child elements. The `value` parameter is needed for every `bar.item`.

There is the `sm` variant for thinner Bars. Also, you could use [tooltips](spectre/tooltips) for any `bar.item` or `bar.btn`.

On each `bar.item` the following aria attributes are set based on the options passed to `bar.item`:

```html
<div role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
```

## Normal Bars

```example
<script>
  import { bar, tooltip, spectre } from '@svelkit/spectre'
</script>

<div use:bar={'sm'} use:spectre={'mb-2'}>
  <div use:bar.item={25} use:tooltip={'25%'}></div>
</div>

<div use:bar>
  <div use:bar.item={50} use:tooltip={'50%'}></div>
</div>
```

## Multi Bars

```example
<script>
  import { bar, tooltip, bg } from '@svelkit/spectre'
</script>

<div use:bar>
  <div use:bar.item={25} use:tooltip={'25%'} use:bg={'success'}>25%</div>
  <div use:bar.item={15} use:tooltip={'15%'} use:bg={'warning'}>15%</div>
</div>
```

## Slider Bar

```example
<script>
  import { bar, tooltip } from '@svelkit/spectre'
</script>

<div use:bar.slider>
  <div use:bar.item={25}>
    <button use:bar.btn use:tooltip={'25%'}></button>
  </div>
</div>
```

## Range Slider Bar

```example
<script>
  import { bar, tooltip } from '@svelkit/spectre'
</script>

<div use:bar.slider>
  <div use:bar.item={15}>
    <button use:bar.btn use:tooltip={'15%'}></button>
  </div>
  <div use:bar.item={65}>
    <button use:bar.btn use:tooltip={'65%'}></button>
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
