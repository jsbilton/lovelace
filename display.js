var Display = {
  init: function () {
    Display.events();
    Display.styling();
  },
  events: function () {

  },
  styling:function(){
    Display.getMessages();
    $(".messages").removeClass("hidden");
  },
  loadMessages: function (messageData) {
    _.each(messageData,function (message) {
      $(".messages").prepend(chatPage.messageTemplate(message));
    });

  },
  getMessages: function () {
    $.ajax({
      type: 'GET',
      url: chatPage.messageURL,
      success:function (data) {
        console.log("Messages retrieved: ", data);
        Display.loadMessages(data);
      },
      failure:function (data) {
        console.log("Failed to retrieve messages: ", data);
      }
    });
  }
}
