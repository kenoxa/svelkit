# Bars

[Bars](https://picturepan2.github.io/spectre/components/bars.html) represent the progress of a task or the value within the known range. Bars are custom components for displaying HTML5 [progress](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress), [meter](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter) and input range elements.

Apply the `bar` action to an element and `bar.item` to its child elements. The `value` parameter is needed for every `bar.item`.

There is the `sm` variant for thinner Bars. Also, you could use [tooltips](spectre/tooltips) for any `bar.item`.

## Normal Bars

```example
<script>
  import { bar, spectre } from '@svelkit/spectre'

  const barItem = bar.item
</script>

<div use:bar={'sm'} use:spectre={'mb-2'}>
  <div use:barItem={25}></div>
</div>

<div use:bar>
  <div use:barItem={50}></div>
</div>
```

## Multi Bars

```example
<script>
  import { bar, bg } from '@svelkit/spectre'

  const barItem = bar.item
</script>
<div use:bar>
  <div use:barItem={25} use:bg={'success'}>25%</div>
  <div use:barItem={15} use:bg={'warning'}>15%</div>
</div>
```

## Slider Bar

```example
<script>
  import { bar, btn } from '@svelkit/spectre'

  const barItem = bar.item
  const barSliderBtn = bar.slider.btn
</script>

<div use:bar={'slider'}>
  <div use:barItem={25}>
    <button use:barSliderBtn></button>
  </div>
</div>
```

## Range Slider Bar

```example
<script>
  import { bar, btn } from '@svelkit/spectre'

  const barItem = bar.item
  const barSliderBtn = bar.slider.btn
</script>

<div use:bar={'slider'}>
  <div use:barItem={15}>
    <button use:barSliderBtn></button>
  </div>
  <div use:barItem={65}>
    <button use:barSliderBtn></button>
  </div>
</div>
```
