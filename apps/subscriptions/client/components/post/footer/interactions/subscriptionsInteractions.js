// ----- COMMENTS ----- //
// Toggle the comment editor
/* Template.SubscriptionsComment.helpers({
   'addComment': function() {
   var active = $('span.comment').hasClass('active');

   if (active) {
   console.log('true');
   return true;
   }
   else {
   console.log('false');
   return false;
   }
   }
   }); */

// Toggle comment button between gray and blue
/* Template.SubscriptionsInteractions.events({
   'click [data-action="toggleCommentEditor"]': function(event) {
   var target = $(event.target);

   // If the user clicks the span element
   if (target.hasClass('active')) {
   target.removeClass('active');
   }
   else {
   target.addClass('active');
   }

   // If the user clicks a child element
   if (target.parent().hasClass('active')) {
   target.parent().removeClass('active');
   }
   else {
   target.parent().addClass('active');
   }    
   }
   }); */


// ----- LIKES ----- //
// Find # of likes on post
Template.likeCount.helpers({
  'like': function() {
    var count = LikesCollection.find({    // If there are:
      liked: {$ne: false},                // - Likes
      postId: this._id                    // - On the current post
    }).count();                           // Returns some number

    if (count == 0) {
      return false                        // Don't show anything
    }
    else if (count >= 0) {
      return count;                       // Show the # of likes
    }
    else {
      console.log("There is a problem");
    }
  },
});

// Toggles the like icon between gray and blue
Template.SubscriptionsInteractions.helpers({
  'hasLiked': function() {
    var count = LikesCollection.find({    // If there are:
      liked: {$ne: false},                // - Likes
      postId: this._id,                   // - On the current post
      likedBy: Meteor.userId()            // - By the current user
    }).count();                           // Return some number

    if (count != 0) {
      return 'active';                    // Returns an active class
    }
  }
});

// Allows the user to like/unlike a post
Template.SubscriptionsInteractions.events({
  'click [data-action="toggleLike"]': function(event) {
    var likeStatus;
    var currentPost = this._id;
    var currentUser = Meteor.userId();

    var isLiked = LikesCollection.find({      // Checks if the user has 
      postId: currentPost,                    // already liked this post
      likedBy: currentUser}).count();

    // If no entry is found, it will insert a new entry
    if (isLiked == 0) {
      Meteor.call('addLike', true, currentPost, currentUser);
    }
    // If there is an existing entry, it will be updated
    else {        
      var target = $(event.target);   // Toggles the likeStatus variable

      // This will unlike a post the user has liked
      if (target.hasClass('active') == true ||
          target.parent().hasClass('active') == true) {
            Meteor.call('toggleLike', currentPost, false);
      }
      // This will re-like a post the user has unliked
      else {
        Meteor.call('toggleLike', currentPost, true);
      }      
    }
  }
});
