#jquery.modalizer

__Given__ some html
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

__When__ I
``` js
$(".non-modal-page").modalize();
```

__Then__ I get
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

### Huh? Why?

Because generally it's a good idea to make your modal interactions work outside of a modal dialog for stuff like testing or mobile views and you probably don't want to write 2 sets of markup depending on what context your content is displayed in. So this will take your normal markup and rearrange it into what ~~your modal library~~ bootstrap wants it in. 

### Usage
``` javascript
$.ajax(url,
  dataType: "html"

  success: (response) -> (
    modal.html($(response).modalize())
  )
)
```

### Options
TODO

### Development
```
bundle install
rake jasmine:ci
```

