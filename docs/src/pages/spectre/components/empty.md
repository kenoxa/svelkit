# Empty

[Empty](https://picturepan2.github.io/spectre/components/empty.html) states/blank slates are commonly used as placeholders for first time use, empty data and error screens.

An empty state component can include icons, messages (title and subtitle messages) and action buttons or any combination of those elements. Apply `empty.icon`, `empty.title`, `empty.subtitle` or `empty.action` to the elements. HTML structure is exampled below.

```example
<script>
  import { empty, h5, btn } from '@svelkit/spectre'
</script>

<div use:empty>
  <div use:empty.icon>
    <!-- <i use:icon.people></i> -->
  </div>
  <p use:empty.title use:h5>You have no new messages</p>
  <p use:empty.subtitle>Click the button to start a conversation.</p>
  <div use:empty.action>
    <button use:btn={'primary'}>Send a message</button>
  </div>
</div>
```
