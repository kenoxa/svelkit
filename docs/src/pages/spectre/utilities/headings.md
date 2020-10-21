# Headings

Headings and h<1-6> set default styles for headings.

```example
<script>
  import { heading } from '@svelkit/spectre'
</script>

<h1 use:heading={1}>heading(1)</h1>
<h2 use:heading={2}>heading(2)</h2>
<h3 use:heading={3}>heading(3)</h3>
<h4 use:heading={4}>heading(4)</h4>
<h5 use:heading={5}>heading(5)</h5>
<h6 use:heading={6}>heading(6)</h6>
```

You can use the `use:heading` action and pass <1-6> as an argument.

```example
<script>
  import { h1, h2, h3, h4, h5, h6 } from '@svelkit/spectre'
</script>

<h1 use:h1>h1</h1>
<h2 use:h2>h2</h2>
<h3 use:h3>h3</h3>
<h4 use:h4>h4</h4>
<h5 use:h5>h5</h5>
<h6 use:h6>h6</h6>
```

You can use the `use:h<1-6>`.
