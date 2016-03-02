if (Meteor.isClient) {

	Template.accountsActivate.events({    
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

  Template.accountsEmail.events({
    'click [data-action="accountsEmail"]': function(event) {
      event.preventDefault();
      var email = $('[name="email"]').val();

      Meteor.call('addNewEmail', email);
    }
  });

  Template.accountsSocial.events({
    'click [data-action="facebookLogin"]': function(event) {
      event.preventDefault();
      Meteor.loginWithFacebook({
        requestPermissions: ['public_profile, user_friends, email']
      }, function(error) {
        if (error) {
          throw new Meteor.Error('Facebook failed: ' + error.reason);
        }
      });    
    },

    'click [data-action="twitterLogin"]': function(event) {
      event.preventDefault();
      
      Meteor.loginWithTwitter({}, function(error) {
        if (error) {
          throw new Meteor.Error(error.reason);
        }
      });  
    },

    'click #FacebookBtn': function() {
      FB.login();
      /* var popup;
         function facebookPopup() {
         var pos = screenCenterPos();
         popup = window.open('[URL]', 'SignIn', "width=780, height=410, toolbar=0, scrollbars=0, status=0, resizable=0, location=0, menuBar=0, left=" + pos.x + ", top=" + pos.y);
         setTimeout(CheckLoginStatus, 2000);
         signinWin.focus();
         return false;
         }

         function CheckLoginStatus() {
         if (popup.closed) {
         $('#UserInfo').text($.cookie('some_cookie'));
         }
         else setTimeout(CheckLoginStatus, 1000);
         }

         facebookPopup();
         CheckLoginStatus(); */
    }
  });
	
  Template.accountsInactivate.events({
		'click .logout': function(event) {
			event.preventDefault();
			Meteor.logout();
		},

    'click .inactivate': function(event) {
      event.preventDefault();

      /* Add user to "inactive" role. */
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
