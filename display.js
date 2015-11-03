var Display = {
  init: function () {
    Display.events();
    Display.styling();
  },
  events: function () {

  },
  styling:function(){
    Display.getMessages();
  },
  loadMessages: function (messageData) {
    var messageHTML="";
    _.each(messageData,function (message) {
      messageHTML+=chatPage.messageTemplate(message);
    });
    $(".messages").html(messageHTML);
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
