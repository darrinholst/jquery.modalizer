$.fn.modalize = function() {
  var source = $('<div>').html(this.html()),
      form = source.find('form'),
      modalTemp = $('<div>'),
      modalHeader = $('<div>').addClass('modal-header').appendTo(modalTemp),
      modalBody = $('<div>').addClass('modal-body').appendTo(modalTemp),
      modalFooter = $('<div>').addClass('modal-footer').appendTo(modalTemp);

  source.find('form > *').unwrap();
  source.find('h2:first').appendTo(modalHeader);
  source.find('.actions:first').appendTo(modalFooter);
  modalBody.append(source.html());

  if(form.length) {
    return form.html(modalTemp.html());
  } else {
    return modalTemp.html();
  }
}
