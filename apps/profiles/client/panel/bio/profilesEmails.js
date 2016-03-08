Template.ProfilesEmails.events({
  'click [data-action="addEmail"]': function(event) {
    event.preventDefault();
    var email = $('[name="email"]').val();

    Meteor.call('addNewEmail', email);
  }
});
