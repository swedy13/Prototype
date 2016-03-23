// ON CREATED
Template.ScoresApp.onCreated(function() {
  var self = this;
  self.resources = new ReactiveVar(null);

  Meteor.call('getGamesAPI', function(error, result) {
    if (!error) {
      self.resources.set(result.games);
    }
    else {
      console.log(error);
    }
  });
});


// HELPERS
Template.ScoresApp.helpers({
  getStats: function() {
    var self = Template.instance();
    console.log(self.resources.get());
    return self.resources.get();
  }
});


// EVENTS
Template.ScoresApp.events({
  'click button': function(event) {
    event.preventDefault();
  }
});
