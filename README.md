#jquery.modalizer

Given some html
``` html
<div class="non-modal-page">
  <h2>Some Title</h2>
  <form>
    <input type="text" name="foo">
    <div class="actions">
      <input type="submit" value="Do It">
    </div>
  </form>
</div>
```

When I
``` js
$(".non-modal-page").modalize();
```

Then I get
``` html
<form>
  <div class="modal-header">
    <h2>Some Title</h2>
  </div>
  <div class="modal-body">
    <input type="text" name="foo">
  </div>
  <div class="modal-footer">
    <div class="actions">
      <input type="submit" value="Do It">
    </div>
  </div>
</form>
```

### Run the specs
```
bundle install
rake jasmine:ci
```

