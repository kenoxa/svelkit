# Text

[Text utilities](https://picturepan2.github.io/spectre/utilities/text.html) are used for text alignment, styles and overflow things.

```example
<script>
  import { cols, col, text, bg } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col>
    <div use:text.left>left aligned text</div>
  </div>
  <div use:col>
    <div use:text.center>center aligned text</div>
  </div>
  <div use:col>
    <div use:text.right>right aligned text</div>
  </div>
  <div use:col>
    <div use:text.justify>justified text</div>
  </div>
  <div use:col>
    <div use:text.lowercase>Lowercased text</div>
  </div>
  <div use:col>
    <div use:text.uppercase>Uppercased text</div>
  </div>
  <div use:col>
    <div use:text.capitalize>Capitalized text</div>
  </div>
  <div use:col>
    <div use:text.normal>Normal weight text</div>
  </div>
  <div use:col>
    <div use:text.bold>Bold text</div>
  </div>
  <div use:col>
    <div use:text.italic>Italicized text</div>
  </div>
  <div use:col>
    <div use:text.muted>Muted text</div>
  </div>
  <div use:col>
    <div use:text.large>Larger text (120%)</div>
  </div>
  <div use:col>
    <div use:text.small>Smaller text (90%)</div>
  </div>
  <div use:col>
    <div use:text.tiny>Tiny text (80%)</div>
  </div>
  <div use:col>
    <div use:text.ellipsis>Overflow behavior: display an ellipsis to represent clipped text</div>
  </div>
  <div use:col>
    <div use:text.clip>Overflow behavior: truncate the text</div>
  </div>
  <div use:col>
    <div use:text.break>Text may be broken at arbitrary points</div>
</div>
</div>
```
