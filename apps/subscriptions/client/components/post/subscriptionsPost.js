// Toggle comment button between gray and blue
Template.SubscriptionsInteractions.events({
  'click [data-action="toggleCommentEditor"]': function(event) {
    var target = $(event.target);

    // Activate element
    if (target.is('span') && !target.hasClass('active')) {
      target.addClass('active');
    }
    // Deactivate element
    else if (target.is('span') && target.hasClass('active')) {
      target.removeClass('active');
    }
    // Activate child node
    else if (!target.parent().hasClass('active')){
      target.parent().addClass('active');
    }
    // Deactivate child node
    else if (target.parent().hasClass('active')) {
      target.parent().removeClass('active');
    }    
  }
});

Template.SubscriptionsFooter.helpers({
  
});

/* Template.SubscriptionsFooter.helpers({
   showComments: function() {
   var comments = CommentsCollection.find({postId: this._id}).count();

   if (comments == 0) {
   return false;
   }
   else if (comments >= 0) {
   return true;
   }
   else {
   console.log('There is a problem');
   }
   }
   }); */

/* Template.SubscriptionsFooter.events({
   'click [data-action="toggleCommentBox"]': function(event) {
   var $this = $('[data-action="toggleCommentBox"]');

   $this.toggleClass('active');
   }
   }); */
