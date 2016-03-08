if (Meteor.isServer) {

  Meteor.methods({
    'addPost': function(postContent, postTime, currentUser) {
      PostsCollection.insert({
        content: postContent,
        createdAt: postTime,
        createdBy: currentUser,
        updatedAt: false,
        updatedBy: false
      });
    },

    /* 'editPost': function(newPostContent, updateTime, currentUser) {
       PostsCollection.update({
       content: newPostContent,
       updatedAt: updateTime,
       updatedBy: currentUser
       });
       }, */
    
    'addComment': function(commentText, currentPost, commentTime, currentUser) {
      CommentsCollection.insert({
        comment: commentText,
        postId: currentPost,
        createdAt: commentTime,
        createdBy: currentUser,
        updatedAt: false,
        updatedBy: false
      });
    },

    /* 'editPost': function(newCommentText, currentPost, updateTime, currentUser) {
       CommentsCollection.insert({
       comment: newCommentText,
       postId: currentPost,
       updatedAt: updateTime,
       updatedBy: currentUser
       });
       }, */
    
    'addLike': function(likeStatus, currentPost, currentUser) {
      LikesCollection.insert({
        liked: likeStatus,
        postId: currentPost,
        likedBy: currentUser
      });
    },

    'toggleLike': function(currentPost, likeStatus) {
      LikesCollection.update({postId: currentPost}, {$set: {liked: likeStatus}});
    },
    
    'share': function() {
      // some code
    }
  });
}
