if (Meteor.isServer) {

	// PUBLICATIONS
	Meteor.publish('posts', function() {
		return Posts.find({
			// Privacy Settings
			/* $or: [
				 {private: {$ne: true}},
				 {owner: this.userId}
				 ] */
		});
	});

	
	// METHODS
	Meteor.methods({
		addPost: function(text) {
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
