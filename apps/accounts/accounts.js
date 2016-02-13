if (Meteor.isClient) {

	Template.activate.events({		
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
        /* else {
           Router.go('home');
           } */
      });
		},

    'click .login': function(event) {
			event.preventDefault();
			var email = $('[name=email]').val();
			var password = $('[name=password]').val();
      
			Meteor.loginWithPassword(email, password, function(error) {
        if (error) {
          console.log(error.reason);
        }
        /* else {
           Router.go('home');
           } */
      });
		}
	});
	
  Template.inactivate.events({
		'click .logout': function(event) {
			event.preventDefault();
			Meteor.logout();
      /* Router.go('login'); */
		},

    'click .inactivate': function(event) {
      event.preventDefault();

      /* Add user to "inactive" role. */
		}
  });
}
