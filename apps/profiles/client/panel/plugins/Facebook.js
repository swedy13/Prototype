// Client Code
if (Meteor.isClient) {

  Template.accountsCheck.helpers({
    profPics: function() {
      var currentUser = Meteor.userId();
      return ProfPicsCollection.find({userId: currentUser});
    }
  });

  Template.accountsCheck.events({
    'click [data-action="fbPic"]': function() {
      var currentUser = Meteor.userId();
      if (Meteor.user().services.facebook) {
        Meteor.call('fbPic', currentUser);
      }
    }
  });
}


// Server Code
if (Meteor.isServer) {

  Meteor.methods({
    'fbPic': function(currentUser) {
      var profilePic = 'http://graph.facebook.com/' +
                       Meteor.user().services.facebook.id +
                       '/picture/?type=large';

      ProfPicsCollection.upsert({
        userId: currentUser
      },{
        $set: {
          fbPic: profilePic
        }
      });
      return true
    }
  });
}
