if (Meteor.isClient) {

  Template.subsFilters.events({
    'click [data-action="toggle-tag"]': function(e) {
      var $this = $(e.target);

      if ($this.hasClass('disabled')) {
        // do nothing
      }
      if ($this.is('i')) {
        $this.parent().parent().toggleClass('active');
      }
      if ($this.is('span') || $this.is('p')) {
        $this.parent().toggleClass('active');
      }
      else {
        $this.toggleClass('active');
      } 
    }      
  });
  
	Template.body.onRendered(function() {
		(function swapContents() {
			var timer;
      var content = $('[data-action="swap-contents"]');
      
      content
        .mouseenter(function(){
					clearTimeout(timer);
					// Use a timer to prevent animation stacking
					timer = setTimeout(function() {
						content.find('.top')
							.animate(
								{opacity: 0, marginBottom: '5px'},
								{queue: false, duration: 150})
							.hide();					
						content.find('.bottom')
							.show()
							.animate(
								{opacity: 1, marginBottom: '0px'},
								{queue: false, duration: 150});
						content.find('input').focus();
					}, 50);
				})
				.mouseleave(function() {
					clearTimeout(timer);
					// Hides input if no text has been entered
					if (content.find('input').val() == '') {
						content.find('.bottom')
							.animate(
								{opacity: 0, marginBottom: '5px'},
								{queue: false, duration: 150})
							.hide();
						setTimeout(function() {
							content.find('.top')
								.show()
								.animate(
									{opacity: 1, marginBottom: '0px'},
									{queue: false, duration: 150});
						}, 50);
					}
				});
		})();
	});
}
