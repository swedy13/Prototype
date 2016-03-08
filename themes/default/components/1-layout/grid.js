if (Meteor.isClient) {

	// SUBSCRIPTIONS
	/* Meteor.subscribe('posts'); */


	// RENDERED
	Template.grid.onRendered(function() {
		
		(function scrollToggle() {
			var lastPosition = 0;
			
			$(window).scroll(function(e) {
				var currentPosition	= $(this).scrollTop();

				if (currentPosition > lastPosition) {
					setTimeout(function() {
						$('header').slideUp(100);
						$('footer').slideUp(100);
					}, 250);
					setTimeout(function() {
						$('main').css('top', '20').css('padding-bottom', '20px');
						$('nav').css('top', '0');
					}, 275);
				}
				else {
					$('header').show();
					$('main').css('top', '50px');
					$('nav').css('top', '30px');
				}
				
				lastPosition = currentPosition;
			});
		})();

		/* (function headerToggle() {
			 $(window).scroll(function() {
			 if ($('header').css('display') == 'none') {
			 var header = $(this).scrollTop() + 30;
			 
			 $(document).mousemove(function(e) {
			 if (e.pageY < header) {
			 $('header').slideDown(100);
			 }
			 });
			 }
			 });
			 })();		 */

		(function footerToggle() {
			$('nav').find('a.info').click(function() {
				$('footer').slideToggle(150);
			});
		})();
	});
}
