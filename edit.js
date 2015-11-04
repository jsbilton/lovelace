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
            $(this).children(".chat")[0].contentEditable = true;
        });
        $(".messages").on("keypress", ".message", function(event) {
            if (event.charCode === 13) {
                $(this).children(".chat")[0].contentEditable =
                    false;
            }
        });
    },
    editMessage: function(messages, $editedMsg) {
        $.ajax({
            type: 'PUT',
            url: messageUrl,
            data: messageL,
            success: function(editedMessages) {
                console.log('you changed me yayyy',
                    editedMessages);
                console.log($editedMsg);
            },
            failure: function(editedMessages) {
                console.log('not working here you',
                    editedMessages);
            },
        });
    }
};
