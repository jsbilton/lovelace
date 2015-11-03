var defaultURL = "http://placekitten.com.s3.amazonaws.com/homepage-samples/200/286.jpg";

var Message = function (text,user) {
  this.text = text;
  this.time = Date.now();
  this.user = user;
};

var User = function(name, avatarURL){
    this.name = name;
    this.avatar = avatarURL || defaultURL;
};
