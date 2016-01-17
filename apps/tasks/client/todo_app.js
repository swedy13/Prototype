if (Meteor.isClient) {

	// SUBSCRIPTIONS
	Meteor.subscribe('tasks');

	// HELPERS
	// Tasks Helpers
	Template.tasks.helpers({
		tasks: function() {
			if (Session.get('hideCompleted')) {
				return Tasks.find({checked: {$ne: true}}, {sort: {createdAt: -1}});
			}
			else {				
				return Tasks.find({}, {sort: {createdAt: -1}});
			}
		},

		hideCompleted: function() {
			return Session.get('hideCompleted');
		},

		incompleteCount: function() {
			return Tasks.find({checked: {$ne: true}}).count();
		}
	});

	// Task Helpers
	Template.task.helpers({
		isOwner: function() {
			return this.owner === Meteor.userId();
		}
	});

	
	// EVENTS
	// Tasks Events
	Template.tasks.events({
		'submit .new-task': function(e) {
			e.preventDefault();

			var text = e.target.text.value;

			Meteor.call('addTask', text);
			
			e.target.text.value = '';
		},

		'change .hide-completed input': function(e) {
			Session.set('hideCompleted', e.target.checked);
		}
	});

	// Task Events
	Template.task.events({
    "click .toggle-checked": function () {
			Meteor.call('setChecked', this._id, ! this.checked);
    },
    "click .delete": function () {
			Meteor.call('deleteTask', this._id);
    },
		'click .toggle-private': function() {
			Meteor.call('setPrivate', this._id, ! this.private);
		}
  });

  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });

	
	// METHODS
	Meteor.methods({
		addTask: function(text) {
			var task = Tasks.findOne(taskId);
			
			if (task.private && task.owner !== Meteor.userId()) {
				throw new Meteor.Error('not-authorized')
			}
			
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
