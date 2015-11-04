var Post = {
   init: function() {
        Post.initStyling();
        Post.initEvents();
    },
    styling: function() {},
    events: function() {
      $('form').on('submit',function (event) {
        event.preventDefault();
        Post.createPost();
      });
    },
    createPost: function() {
        var newPost = new Message($('.form-control').val(),chatPage.currentUser);
        $('.form-control').val('');
        $.ajax( {
            url: chatPage.messageURL,
            method: 'POST',
            data: newPost,
            success: function(response) {
                console.log(response);
                var postHTML = chatPage.messageTemplate(response);
                $('.messages').append(postHTML);
            }
        })
    },
}
