if (Meteor.isClient) {

  Template.SubscriptionsFooter.helpers({
    comment: function() {
      var currentPost = this._id;
      return CommentsCollection.find({postId: currentPost});
    }
  });

  Template.SubscriptionsCommentEditor.events({
    'keyup [name="post-comment"]': function(e) {
      e.preventDefault();
      var commentText = $('[name="post-comment"]').val();
      var currentPost = this._id; 
      var commentTime = new Date();
      var currentUser = Meteor.userId();

      if (e.which == 13) {
        if (commentText != '') {
          Meteor.call('addComment', commentText, currentPost, commentTime, currentUser);
          $('[name="post-comment"]')
            .val('')
            .blur();
        }
      }
    }
  });
}
