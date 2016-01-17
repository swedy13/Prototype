if (Meteor.isServer) {

	// PUBLICATIONS
	Meteor.publish('tasks', function() {
		return Tasks.find({
			$or: [
				{private: {$ne: true}},
				{owner: this.userId}
			]
		});
	});
	
	// METHODS
	Meteor.methods({
		addTask: function(text) {
			Tasks.insert({
				text: text,
				createdAt: new Date(),
				owner: Meteor.userId(),
				username: Meteor.user().username
			});
		},

		deleteTask: function(taskId) {
			var task = Tasks.findOne(taskId);
			
			if (task.private && task.owner !== Meteor.userId()) {
				throw new Meteor.Error('not-authorized')
			}
			
			Tasks.remove(taskId);
		},

		setChecked: function(taskId, setChecked) {
			var task = Tasks.findOne(taskId);
			
			if (task.private && task.owner !== Meteor.userId()) {
				throw new Meteor.Error('not-authorized')
			}
			
			Tasks.update(taskId, {$set: {checked: setChecked}});
		},

		setPrivate: function(taskId, setToPrivate) {
			var task = Tasks.findOne(taskId);

			if (task.owner !== Meteor.userId()) {
				throw new Meteor.Error('not-authorized');
			}

			Tasks.update(taskId, {$set: {private: setToPrivate}});
		}
	});
}
