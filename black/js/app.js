(() => {
  // resources/js/app.js
  (function($) {
    $(".burger").click(function() {
      $("#burger").toggleClass("active");
    });
  })(jQuery);
})();
