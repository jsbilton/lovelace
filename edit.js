// $('.edit').on('click', function (event) {
//     event.preventDefault();
//     var element = this
//     juanOnOnePage.showActiveSection(element);
//   })
//   $('body').on('click','.edit', function(e) {
//     e.preventDefault();
//     var $editText = $(this).siblings('.edit-Text')
//     $editText.css('display','inline-block');
//
//   })
//on double-clicking an item, allow them to edit it
var Edit = {
    init: function() {},
    styling: function() {},
    events: function() {
        $(".messages").on("dblclick", ".message", function() {
            $(this).children(".messageText")[0].contentEditable = true;
        });
        $(".messages").on("keypress", ".message", function(event) {
            if (event.charCode === 13) {
                $(this).children(".messageText")[0].contentEditable =
                    false;
                    Edit.editMessage()
            }
        });
    },
    editMessage: function(event) {
      var newMsg = new Message ($('.messages').val(),'user');
      $('.messages').val('');
        $.ajax({
            type: 'PUT',
            url: chatPage.messageUrl + "/" +  messageId,
            data: newMsg,
            success: function(res) {
                console.log('you changed me yayyy ', res)
            },
            failure: function(res) {
                console.log('not working here you ', res);
                var edittHTML = chatPage.messageTemplate(newMsg);
                $('.messages').append(edittHTML);
            }
        })
    }
};
