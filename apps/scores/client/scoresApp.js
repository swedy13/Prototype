// ON CREATED
Template.ScoresApp.onCreated(function() {
  var self = this;
  var user = Meteor.userId();
  self.resources = new ReactiveVar(null);

  if (user) {
    Meteor.call('getGamesAPI', function(error, result) {
      if (!error) {
        self.resources.set(result.games);
      }
      else {
        console.log(error);
      }
    });
  }
});


// HELPERS
Template.ScoresApp.helpers({
  getStats: function() {
    var self = Template.instance();
    var user = Meteor.userId();

    if (user) {
      console.log(self.resources.get());
      return self.resources.get();
    }
  }
});


// EVENTS
Template.ScoresApp.events({
  'click button': function(event) {
    event.preventDefault();

    var n = [];
    _.each($('ul.kda >li'), function(item) {
      n = 0;
      n++;
    });
    console.log(n);
  }
});
