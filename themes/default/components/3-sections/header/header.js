if (Meteor.isClient) {
  
  Template.header.events({
    'click [data-action="toggleUserMenu"]': function(event) {
      if ($('.usermenu').css('display') == 'none') {
        $('.usermenu').slideDown(25).focus();
        /* $('.usermenu').focus(); */
      }
      else {
        $('.usermenu').slideUp(25);
      }
    }
  });

  /* Template.body.events({
     // Close the user menu when clicking outside the menu button
     'click': function(event) {
     if ($('.usermenu').hasClass('open')) {
     $('.usermenu').slideUp(25).removeClass('open');
     }
     }
     }); */
  
	Template.grid.onRendered(function() {
    (function closeUserMenu() {
      $('.usermenu').focusout(function() {
        $('.usermenu').slideUp(25);
      });
    })();
    
		// The 'grid' template allows this function to work when
		// a user hovers over the main content area
		(function toggleHeader() {
			var timer;
			$('#center-column')
				.mouseenter(function() {
					clearTimeout(timer);
					// Use a timer to prevent animation stacking
					timer = setTimeout(function() {
						$('.header > .title')
							 .animate(
								 {opacity: 0, marginTop: '5px'},
								 {queue: false, duration: 150})
							 .hide();
						$('.header > .controls')
							 .delay(75)
							 .show()
							 .animate(
								 {opacity: 1, marginTop: '0px'},
								 {queue: false, duration: 150});
					}, 75);
				})
				.mouseleave(function() {
					clearTimeout(timer);
					if ($('.header > .controls').find('button').hasClass('active')) {
						// freeze visible controls
					}
					else {
						setTimeout(function() {
							$('.header > .controls')
								 .animate(
									 {opacity: 0, marginTop: '5px'},
									 {queue: false, duration: 150})
								 .hide();
							$('.header > .title')
								 .delay(75)
								 .show()
								 .animate(
									 {opacity: 1, marginTop: '5px'},
									 {queue: false, duration: 150});
						});
					}				
				});
		})();
	});
}
