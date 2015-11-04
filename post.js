var Post = {
   init: function() {
        Post.initStyling();
        Post.initEvents();
    },
    styling: function() {},
    events: function() {
      $('form').on('submit', Post.createPost);
    },
    createPost: function(event) {
        var newPost = new Message($('.form-control').val(),chatPage.currentUser);
        $('.form-control').val('');
        $.ajax( {
            url: chatPage.messageURL,
            method: 'POST',
            data: newPost,
            success: function(response) {
                console.log(response);
                var postHTML = chatPage.messageTemplate(newPost);
                $('.messages').append(postHTML);
            }
        })
    },
}
