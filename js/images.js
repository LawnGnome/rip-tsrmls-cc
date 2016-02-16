(function ($) {
  $.fn.imageCredits = function () {
    var element = this;

    $.getJSON("images.json", function (data) {
      var container = $(element).empty();
      var list = $("<ul class='image-credits' />").appendTo(container);

      $.each(data, function () {
        var item = $("<li />").appendTo(list);

        $("<a />").attr("href", this.source).text(this.title + " by " + this.author).appendTo(item);
        $("<span class='licence' />").text(this.licence).appendTo(item);
      });
    });
  };
})(jQuery);
