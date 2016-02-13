if (Meteor.isClient) {
  Template.subsFeed.helpers({
    'post': function() {
      var currentUser = Meteor.userId();
      
      return PostsCollection.find({createdBy: currentUser}, {sort: {createdAt: -1}});
    }
  });
}
