var Post = {
   init: function() {
        Post.initStyling();
        Post.initEvents();
    },
    initStyling: function() {},
    createPost: function(event) {
        var newPost = new Message($('textarea').val());
        $('textarea').val('');
        $.ajax( {
            url: chatPage.messageURL,
            method: 'POST',
            data: newPost,
            success: function(response) {
                console.log(response);
                var postHTML = chatPage.messageTemplate(newPost);
                $('.messages').append(postHTML);
                $('form').on('submit', Post.createPost);
            }
        })
    },
}
