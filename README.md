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

Until I get a command line test runner run `python -m SimpleHTTPServer` from
the root directory and `open http://localhost:8000/SpecRunner.html` to run the
specs.

