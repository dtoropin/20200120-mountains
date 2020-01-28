(function () {
  var subs = $('.tiles__subs');
  var img = $('.tiles__img');
  var height = 0;

  function blockHeight() {
    $.each(subs, function (i) {
      var item = $(subs[i]);
      height = item.height() > height
                ? item.height()
                : height
    });

    subs.css('height', height);
    img.css('height', height);
  }

  blockHeight();
  window.onresize = blockHeight();
})();