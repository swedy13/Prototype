if (Meteor.isClient) {

	Template.body.onRendered(function() {
		$('input')
			.focus(function() {
				$(this).parent().addClass('active');
			})
			.focusout(function() {
				$(this).parent().removeClass('active');
			});

		$('.editor').click(function() {
			$(this).find('textarea').focus();
		});
	});

	Template.subsEditor.onRendered(function() {
		$('.editor').find('textarea').autosize();
	});
}
