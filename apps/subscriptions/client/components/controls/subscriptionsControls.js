if (Meteor.isClient) {

  Template.SubscriptionsControls.events({
    'click .post': function() {
			$('#subs-editor').slideToggle(200);
      $('#subs-editor').find('textarea').focus();
    },

    'click .search': function() {
      // some action
    },

    'click .filter': function() {
      $('#subscriptions-filters').css('display', 'flex').toggleClass('slideLeft');
    }
  });
}
