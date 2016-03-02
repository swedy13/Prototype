if (Meteor.isServer) {

  Meteor.methods({
    'subsPost': function(postContent, postTime, currentUser) {
      PostsCollection.insert({
        content: postContent,
        createdAt: postTime,
        createdBy: currentUser,
        updatedAt: false,
        updatedBy: false
      });
    },
    
    'subsComment': function(commentText, currentPost, commentTime, currentUser) {
      CommentsCollection.insert({
        comment: commentText,
        postId: currentPost,
        createdAt: commentTime,
        createdBy: currentUser,
        updatedAt: false,
        updatedBy: false
      });
    }
  });
}
