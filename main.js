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
  messageURL: "http://tiny-tiny.herokuapp.com/collections/sally-messages",
  userURL: "http://tiny-tiny.herokuapp.com/collections/sally-users",
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
    var user = chatPage.currentUser;
    window.addEventListener("beforeunload", function() {
      chatPage.logout(user);
    });
  },
  styling: function(){
    Display.styling();
    Edit.styling();
    Post.styling();
    Delete.styling();
  },
  login: function (user) {
    chatPage.currentUser = user;
    user.loggedIn=true;
    $.ajax({
      type: 'PUT',
      url: chatPage.userURL+"/"+user._id,
      data: user,
      success:function (data) {
        console.log("User Logged in: ", data);
        // Display.loadMessages(data);
      },
      failure:function (data) {
        console.log("Failed to log in: ", data);
      }
    });
  },
  logout: function (user) {
    user.loggedIn=false;
    $.ajax({
      type: 'PUT',
      url: chatPage.userURL+"/"+user._id,
      data: user,
      success:function (data) {
        console.log("User Logged out: ", data);
        // Display.loadMessages(data);
      },
      failure:function (data) {
        console.log("Failed to log out: ", data);
      }
    });
}
}

$(document).ready(function () {
  Login.init();
});
