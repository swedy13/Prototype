if (Meteor.isClient) {

  Template.body.events({
    'click [data-action="toggle-button"]': function(e) {
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

	/* Template.body.onRendered(function() {
		 (function selectButton() {
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

     // Posts appear to render after the body has rendered
     Template.subsSocial.onRendered(function() {
		 (function selectButton() {
		 $('button.toggle').click(function() {
		 if ($(this).hasClass('disabled')) {
		 // do nothing
		 }
		 else {
		 $(this).toggleClass('active');
		 }
		 });
		 })();
     }); */
}
