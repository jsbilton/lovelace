var post () {
  url:
  init: function ()
    post.initStyling();
    post.initEvents();

},
  initStyling: function (){

},
  createPost: function (event) {
    event.preventDefault();
    var newPost = {
      user: $('input[name="type"]').val(),
      message: $('input[name="message"]').val(),
    };
    $('input [type="text"]').val('');
    $.ajax(){
      url: post.url,
      method: 'POST',
      data: newPost,
      success: function (response){
        console.log(response);
        $('.message').html('');
        post.getPost();
      }

    }

},
