if (Meteor.isClient) {

	Template.AccountsActivate.events({    
    'click .login': function(event) {
			event.preventDefault();
			var email = $('[name=email]').val();
			var password = $('[name=password]').val();
      
			Meteor.loginWithPassword(email, password, function(error) {
        if (error) {
          console.log(error.reason);
        }
      });
		},

		'click .register': function(event) {
			event.preventDefault();
			var email = $('[name=email]').val();
			var password = $('[name=password]').val();

      Accounts.createUser({
        email: email,
        password: password
      }, function(error) {
        if (error) {
          console.log(error.reason);
        }
      });
		}
	});
	
  Template.AccountsDeactivate.events({
    'click .deactivate': function(event) {
      event.preventDefault();

      /* Add user to "inactive" role. */
		}
  });

  Template.AccountsLogout.events({
		'click [data-action="logout"]': function() {
      $('.usermenu').slideUp(25);
			Meteor.logout();
		}
  });
}


if (Meteor.isServer) {

  Meteor.methods({
    'addNewEmail': function(email) {
      Accounts.addEmail(this.userId, email);
      /* Accounts.sendVerificationEmail(this.userId, email); */
      return true;
    }
  });
}
