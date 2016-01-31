if (Meteor.isClient) {

	Template.subsPost.helpers({
	});
	
	Template.subsPost.events({
	});

	Template.subsPost.onRendered(function() {
		(function imageResize() {
			var numImages = $('.card').find('.images').children().length;
			var images = $('.card').find('.images').children();

			if (numImages % 3 === 0) {
				images.css('min-width', 'calc(33.3% - 5px)');
			}
			else if (numImages % 2 === 0) {
				images.css('min-width', 'calc(50% - 4.5px)');
			}
			else {
				images.css('min-width', '100%');
			}
		})();
	});
}
