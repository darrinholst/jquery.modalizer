describe("jquery.modalizer", function() {
  normalized = function(html) {
    return "\n\n" + $("<div>").append($(html)).html().replace(/\n/g, '').replace(/> *</g, '>\n<') + "\n\n";
  }

  modalizeAndCompare = function() {
    var modalized = $(".original").modalize();
    expect(normalized(modalized)).toEqual(normalized($(".expected").html()))
  }

  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = 'spec/fixtures';
  });

  it("should be able to reformat simple content with the default structure", function() {
    loadFixtures("simple.html");
    modalizeAndCompare();
  });

  it("should be able to reformat simple content with a form", function() {
    loadFixtures("simple-form.html");
    modalizeAndCompare();
  });
});
