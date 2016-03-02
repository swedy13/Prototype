if (Meteor.isClient) {
  
  Template.subsEditor.events({
    'click [data-action="publish-content"]': function(e) {
      e.preventDefault();
      var postContent = $('[name="postContent"]').val();
      var postTime = new Date();
      var currentUser = Meteor.userId();

      if (postContent != '') {
        Meteor.call('subsPost', postContent, postTime, currentUser);
        $('[name="postContent"]').val('');
        $('#subs-editor').delay(300).slideUp(200);
        $('.controls').find('.post').removeClass('active');
      }
    }
  });
}
