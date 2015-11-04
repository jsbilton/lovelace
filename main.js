var Message = function (text,userName, userID, userAvatar) {
  this.text = text || "I'm too dumb to use a chat app correctly.";
  this.time = Date.now();
  this.userName = userName;
  this.userID = userID;
  this.userAvatar = userAvatar;
};

var User = function(name, password, avatarURL){
    this.name = name;
    this.password = password;
    this.avatar = avatarURL || chatPage.defaultURL;
    this.loggedIn = false;
};

var chatPage = {
  defaultURL: "http://placekitten.com.s3.amazonaws.com/homepage-samples/200/286.jpg",
  messageTemplate: _.template($("#msgTmpl").html()),
  messageURL: "http://tiny-tiny.herokuapp.com/collections/lovelace-messages",
  userURL: "http://tiny-tiny.herokuapp.com/collections/lovelace-users",
  currentUser:"",
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
  Login.init();
});
