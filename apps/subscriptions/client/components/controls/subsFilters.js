if (Meteor.isClient) {

	Template.subsFilters.helpers({
	});
	

	Template.subsFilters.events({
	});


	Template.subsFilters.onRendered(function() {
		(function highlightButton() {
			$('.tag').click(function() {
				$(this).find('i').toggleClass('icon').toggleClass('dark');
			});
		})();
		
		/* (function locationToggle() {			
			 var input = $('.input.search');
			 var tag = $('.tag.search');
			 
			 tag.click(function() {
			 input.show().css('display', 'flex');
			 $('input.input').focus();
			 input.find('i').css('color', '#0074d9')
			 $(this).hide();
			 });

			 input.focusout(function() {
			 $('.tag').find('i').removeClass('icon').removeClass('dark');
			 tag.show();
			 $(this).hide();
			 });
			 })(); */

		(function toggleLocation() {
			var filters		= $('.subs-filters');
			var searchBtn	= filters.find('.tag.search');
			var searchFld = filters.find('.tag.input');

			searchBtn.click(function() {
				searchFld
					.show()
					.css('display', 'flex');
				searchFld.find('i').css('color', '#0074d9');
				searchFld.find('input').focus();
				searchBtn.hide();
			});

			searchFld.focusout(function() {
				if (searchFld.find('input').val() == '') {
					searchBtn
						.show()
						.find('i').removeClass('icon dark');
					searchFld.hide();					
				}
			});
		})();
	});
}
