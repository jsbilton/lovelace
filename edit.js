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
    init: function() {
      Edit.styling();
      Edit.events();
    },
    styling: function() {
       $('.col-md-4').append('<p class="textEdit">' + chatPage.currentUser.name + '</p>');
    },
    events: function() {
        $('.col-md-4').on('dblclick', '.textEdit', function() {
          var $editField = $(this).attr('contentEditable', 'true');
          var name = $(this).siblings('span[class="user"]').text();
          if(name === chatPage.currentUser.name){
            $(this).attr('contentEditable', 'true');
          } else {
            alert('You cant do that');
          }

        });

    },

    editUserInSpace: function(user,$editedField) {
       $.ajax({
         type: 'PUT',
         url: userURL + data.id,
         data: user,
         success: function(editedUser) {
           console.log("I WAS CHANGED: ", editedUser);
           console.log($editedField);

           // $editedField.parent().css('display', 'none');
           // $editedField.parent().siblings('p').text(editedBitter.bitter);
           // $editedField.parent().siblings('h3').html('<img src="' + editedBitter.avatar +'">');
         },
         failure: function(editedUser) {
           console.log('IM STILL A FAILURE: ', editedBitter);
         }
       })
     }


  };
