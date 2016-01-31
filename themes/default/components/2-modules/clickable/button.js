if (Meteor.isClient) {

	Template.body.onRendered(function() {
		(function toggleButton() {
			$('button.toggle').click(function() {
				if ($(this).hasClass('disabled')) {
					// do nothing
				}
				else {
					$(this).toggleClass('active');
				}
			});
		})();
	});
}
