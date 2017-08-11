(function($) {
  "use strict";

  var App = {
    init: function() {
      App.HomepageHeight();
    },

	// Homepage Height
	HomepageHeight: function() {
    var h = window.innerHeight;
    $('.hero_fullscreen').css('height', h );
    $('.mockup').css('height', h );
	}

}

  $(function() {
    App.init();
    $(window).resize(App.HomepageHeight);
  });

})(jQuery);
