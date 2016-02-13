if (Meteor.isClient) {

  Template.subsFooter.helpers({
    'toggle-comment': function() {
      
    }
  });
  
  Template.body.events({
    'click [data-action="toggle-icon"]': function(e) {
      var $this = $(e.target);
      
			if ($this.hasClass('disabled')) {
				// do nothing
			}
      if ($this.is('i') || $this.is('p')) {
        $this.parent().toggleClass('active');
      }
			else {
        $this.toggleClass('active');
			}
    }
  });
}
