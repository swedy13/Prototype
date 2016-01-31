if (Meteor.isClient) {

	Template.grid.onRendered(function() {
		// The 'grid' template allows this function to work when
		// a user hovers over the main content area
		(function toggleHeader() {
			$('#center-column').mouseenter(function() {
				$('.header > .title').stop().slideUp(75);
				$('.header > .controls').stop().delay(75).slideDown(125);
			});
			
			$('#center-column').mouseleave(function() {
				if ($('.header > .controls').find('button').hasClass('active')) {
					// freeze visible controls
				}
				else {
					setTimeout(function() {
						$('.header > .controls').slideUp(125);
						$('.header > .title').delay(125).slideDown(75);
					});
				}				
			});
		})();
	});

	Template.subsFeed.onRendered(function() {
		(function togglePost() {
			$('.controls').find('.post').click(function() {
				$('#subs-editor').slideToggle(200);
			});
		})();

		(function toggleSearch() {
			$('.controls').find('.search').click(function() {
			});
		})();
	});

	Template.subsFilters.onRendered(function() {
		(function toggleFilter() {
			$('.controls').find('.filter').click(function() {
				setTimeout(function() {
					$('.subs-filter').toggleClass('slideLeft');						
				}, 100);
				$('.subs-filter').toggle();
			});
		})();
	});

	/* Template.subsSidebar.onRendered(function() {
		 (function settingsToggle() {
		 $('.settings').click(function() {
		 $(this).toggleClass('active');
		 });
		 })();
		 }); */
}
