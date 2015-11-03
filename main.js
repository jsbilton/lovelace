var defaultURL = "http://placekitten.com.s3.amazonaws.com/homepage-samples/200/286.jpg";
var messageTemplate = _.template($("#msgTmpl").html());
var messageURL = "http://tiy-fee-rest.herokuapp.com/collections/lovelace-messages";
var userURL = "http://tiy-fee-rest.herokuapp.com/collections/lovelace-users";

var Message = function (text,user) {
  this.text = text || "I'm too dumb to use a chat app correctly.";
  this.time = Date.now();
  this.user = user;
};

var User = function(name, avatarURL){
    this.name = name;
    this.avatar = avatarURL || defaultURL;
};
