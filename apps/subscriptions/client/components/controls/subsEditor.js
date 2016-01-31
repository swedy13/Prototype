if (Meteor.isClient) {

	Template.subsEditor.onRendered(function() {
		(function focusTextarea() {
			$('.textarea').click(function() {
				$('.textarea').find('textarea').focus();
			});
		})();

		(function getText() {
			return $('.textarea').find('textarea').val();
		})();
	});

	Template.subsEditor.helpers({
	});
	
	Template.subsEditor.events({
		'click #subs-editor-post': function(event) {
			event.preventDefault();
			
			var text = $('.textarea').find('textarea').val();

			Posts.insert({
				text: text,
				createdAt: new Date()
			});

			text = '';
		}
	});
}
