if (Meteor.isClient) {
  Template.SubscriptionsFeed.helpers({
    'post': function() {
      var currentUser = Meteor.userId();      
      return PostsCollection.find({createdBy: currentUser}, {sort: {createdAt: -1}});
    }
  });
}
