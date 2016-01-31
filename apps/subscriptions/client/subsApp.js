if (Meteor.isClient) {

	// SUBSCRIPTIONS
	Meteor.subscribe('posts');


	// HELPERS
	// Posts Helpers
	Template.subsPosts.helpers({
		posts: function() {
			/* if (Session.get('hideCompleted')) {
				 return Posts.find({checked: {$ne: true}}, {sort: {createdAt: -1}});
				 }
				 else {				 */
			return Posts.find({}, {sort: {createdAt: -1}});
			/* } */
		},

		/* hideCompleted: function() {
			 return Session.get('hideCompleted');
			 }, */

		// Display unread posts
		/* unreadCount: function() {
			 return Posts.find({read: {$ne: true}}).count();
			 } */
	});

	// Post Helpers
	Template.subsPost.helpers({
		isOwner: function() {
			return this.owner === Meteor.userId();
		}
	});

	
	// EVENTS	
	// Posts Events
	Template.subsPosts.events({
		'submit .new-post': function(e) {
			e.preventDefault();

			var text = e.target.text.value;

			Meteor.call('addPost', text);
			
			e.target.text.value = '';
			/* },

				 'change .hide-completed input': function(e) {
				 Session.set('hideCompleted', e.target.checked); */
		}
	});

	// Post Events
	// Privacy Options
	/* Template.post.events({
     "click .toggle-checked": function () {
		 Meteor.call('setChecked', this._id, ! this.checked);
     },
     "click .delete": function () {
		 Meteor.call('deleteTask', this._id);
     },
		 'click .toggle-private': function() {
		 Meteor.call('setPrivate', this._id, ! this.private);
		 }
		 }); */
	
	
	// METHODS
	Meteor.methods({
		addPost: function(text) {
			var post = Posts.findOne(postId);
			
			if (post.private && post.owner !== Meteor.userId()) {
				throw new Meteor.Error('not-authorized')
			}
			
			Posts.insert({
				text: text,
				createdAt: new Date(),
				owner: Meteor.userId(),
				username: Meteor.user().username
			});
		},

		removePost: function(postId) {
			var post = Posts.findOne(postId);
			
			if (post.private && post.owner !== Meteor.userId()) {
				throw new Meteor.Error('not-authorized')
			}
			
			Posts.remove(postId);
		}

		/* setChecked: function(taskId, setChecked) {
			 var task = Tasks.findOne(taskId);
			 
			 if (task.private && task.owner !== Meteor.userId()) {
			 throw new Meteor.Error('not-authorized')
			 }
			 
			 Tasks.update(taskId, {$set: {checked: setChecked}});
			 }, */

		/* setPrivate: function(taskId, setToPrivate) {
			 var task = Tasks.findOne(taskId);

			 if (task.owner !== Meteor.userId()) {
			 throw new Meteor.Error('not-authorized');
			 }

			 Tasks.update(taskId, {$set: {private: setToPrivate}});
			 } */
	});
}
