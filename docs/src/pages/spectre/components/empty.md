# Empty

[Empty](https://picturepan2.github.io/spectre/components/empty.html) states/blank slates are commonly used as placeholders for first time use, empty data and error screens.

```example
<script>
  import { cols, col, empty, h5, input, form, btn } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col>
    <div use:empty>
      <div class="empty-icon"><i class="icon icon-3x icon-mail"></i></div>
      <p use:empty.title use:h5>You have no new messages</p>
      <p use:empty.subtitle>Click the button to start a conversation</p>
      <div use:empty.action>
        <button use:btn.primary>Send a message</button>
      </div>
    </div>
  </div>
  <div use:col>
    <div use:empty>
      <div class="empty-icon"><i class="icon icon-3x icon-mail"></i></div>
      <p use:empty.title use:h5>You've successfully signed up</p>
      <p use:empty.subtitle>Click the button to invite your friends</p>
      <div use:empty.action>
        <button use:btn.primary>Invite your friends</button>
      </div>
      <div use:empty.action>
        <button use:btn.link>Skip</button>
      </div>
    </div>
  </div>
  <div use:col>
    <div use:empty>
      <div class="empty-icon"><i class="icon icon-3x icon-people"></i></div>
      <p use:empty.title use:h5>You are not following anyone</p>
      <p use:empty.subtitle>Start to meet new friends</p>
      <div use:empty.action use:input.group use:input.inline>
        <input use:form.input type="text" placeholder="">
        <button use:btn.primary use:input.groupBtn>Search</button>
      </div>
    </div>
  </div>
</div>
```

An empty state component can include icons, messages (title and subtitle messages) and action buttons or any combination of those elements. Add `use:empty.icon`, `use:empty.title`, `use:empty.subtitle` or `use:empty.action` to the elements.
