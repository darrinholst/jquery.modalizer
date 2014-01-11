$.fn.modalize = function() {
  $donor = $("<div>").html(this.html());

  $temp = $("<div>");
  $header = $("<div>").addClass("modal-header").appendTo($temp);
  $body = $("<div>").addClass("modal-body").appendTo($temp);
  $footer = $("<div>").addClass("modal-footer").appendTo($temp);

  $form = $donor.find("form")

  $donor.find("h2:first").appendTo($header);
  $donor.find(".actions:first").appendTo($footer);
  $body.append($donor.html());

  return $form.length ? $form.html($temp.html()) : $temp.html()
}
