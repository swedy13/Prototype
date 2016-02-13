if (Meteor.isClient) {

  Template.subsControls.events({
    'click .post': function() {
			$('#subs-editor').slideToggle(200);
      $('#subs-editor').find('textarea').focus();
    },

    'click .search': function() {
      // some action
    },

    'click .filter': function() {
			setTimeout(function() {
				$('.subs-filter').toggleClass('slideLeft');						
			}, 100);
			$('.subs-filter').toggle();
    }
  });

	/* Template.subsSidebar.onRendered(function() {
		 (function settingsToggle() {
		 $('.settings').click(function() {
		 $(this).toggleClass('active');
		 });
		 })();
		 }); */
}
