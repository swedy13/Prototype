if (Meteor.isClient) {

	Template.body.onRendered(function() {
		(function toggleButton() {
			$('i.toggle').click(function() {
				if ($(this).hasClass('disabled')) {
					// do nothing
				}
				else {
					$(this).toggleClass('active');
				}
			});

			$('img.icon.toggle').click(function() {
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
