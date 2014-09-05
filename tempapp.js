if (Meteor.isClient) {

  Template.chatArea.events({
    'click #button': function(){
      var name = $('#name').val();
      console.log(name);

      var chat = $('#chat').val();
      console.log(chat);

      $('#chatlog').append('<li>' + name + ' : ' + chat + '</li>');
    }

  });


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
