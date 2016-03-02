if (Meteor.isClient) {

  Template.subsFooter.helpers({
    'comment': function() {
      var currentUser = Meteor.userId(); // For editing only
      var currentPost = this._id;

      return CommentsCollection.find({postId: currentPost});
    }
  });

  Template.subsCommentEditor.events({
    'keyup [name="post-comment"]': function(e) {
      e.preventDefault();
      var commentText = $('[name="post-comment"]').val();
      var currentPost = this._id; 
      var commentTime = new Date();
      var currentUser = Meteor.userId();

      if (e.which == 13) {
        if (commentText != '') {
          Meteor.call('subsComment', commentText, currentPost, commentTime, currentUser);
          $('[name="post-comment"]')
            .val('')
            .blur();
        }
      }
    }
  });
}
