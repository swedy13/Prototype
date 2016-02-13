if (Meteor.isClient) {
	
	AccountsTemplates.configure({
    // Behavior
    confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: false,
    sendVerificationEmail: false,
    lowercaseUsername: false,
    focusFirstInput: true,

    // Appearance
    showAddRemoveServices: true,
    showForgotPasswordLink: false,
    showLabels: true,
    showPlaceholders: true,
    showResendVerificationEmailLink: false,

    // Client-side Validation
    continuousValidation: false,
    negativeFeedback: false,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    // Privacy Policy and Terms of Use
    /* privacyUrl: 'privacy',
			 termsUrl: 'terms-of-use', */

    // Redirects
    /* homeRoutePath: '/home',
			 redirectTimeout: 4000, */

    // Hooks
    /* onLogoutHook: myLogoutFunc,
			 onSubmitHook: mySubmitFunc,
			 preSignUpHook: myPreSubmitFunc,
			 postSignUpHook: myPostSubmitFunc, */

    // Texts
    texts: {
      button: {
				signIn: 'Sign In',
        signUp: "Register Now!"
      },
      socialSignUp: "Register",
      socialIcons: {
				google: 'fa fa-google',
				facebook: 'fa fa-facebook',
				twiter: 'fa fa-twitter',
        "meteor-developer": "fa fa-rocket"
      },
      title: {
        forgotPwd: "Recover Your Password"
      },
    },
	});
	

	Meteor.startup(function() {
    // Add Facebook configuration entry
    ServiceConfiguration.configurations.update(
      { "service": "twitter" },
      {
        $set: {
          "appId": "wweGrj6S0khRXJS2BGcwfVeKL",
          "secret": "alZKqfOdyRq8hQGFYA7JIQc1NstH4zj5y0E2uvoQQUlPtNW0hr"
        }
      },
      { upsert: true }
    );
	});
}
