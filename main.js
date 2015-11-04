var Message = function (text,user) {
  this.text = text || "I'm too dumb to use a chat app correctly.";
  this.time = Date.now();
  this.user = user;
};

var User = function(name, avatarURL){
    this.name = name;
    this.avatar = avatarURL || defaultURL;
};

var chatPage = {
  defaultURL: "http://placekitten.com.s3.amazonaws.com/homepage-samples/200/286.jpg",
  messageTemplate: _.template($("#msgTmpl").html()),
  messageURL: "http://tiny-tiny.herokuapp.com/collections/lovelace-messages",
  userURL: "http://tiny-tiny.herokuapp.com/collections/lovelace-users",
  init: function () {
    chatPage.events();
    chatPage.styling();
  },
  events: function () {
    Display.events();
    Edit.events();
    Post.events();
    Delete.events();
  },
  styling: function(){
    Display.styling();
    Edit.styling();
    Post.styling();
    Delete.styling();
  },
}

$(document).ready(function () {
  chatPage.init();
});
