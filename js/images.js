(function ($) {
  $.fn.imageCredits = function () {
    var element = this;

    $.getJSON("images.json", function (data) {
      var container = $(element).empty();
      var list = $("<ul class='image-credits' />").appendTo(container);

      $.each(data, function () {
        if ("" == this.author) {
          return;
        }

        var item = $("<li />").appendTo(list);

        if ("source" in this) {
          $("<a class='title' />").attr("href", this.source).text(this.title + " by " + this.author).appendTo(item);
        } else {
          $("<span class='title' />").text(this.title + " by " + this.author).appendTo(item);
        }
        $("<span class='licence' />").text(this.licence).appendTo(item);
      });
    });
  };
})(jQuery);
