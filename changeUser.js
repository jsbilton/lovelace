// worked on in class and at home
changeUserName: function() {
    var newUserId;
    $.ajax({
            url: userURL,
            method: 'GET',
            success: function(data) {
                newUserId = data
                console.log("Great Success", data);
            }); failure: function(data) {
                console.log("Failure to Communicate");
        }
    }
}
var editedUserHTML = chatPage.editUserInSpace(editedUser);
('.messages').append(editedUserHTML);
newUserId.filter(function(el) {
    return chatPage.currentUser.name === el.name
});
}

// KMO suggested code infused with Bitter as well as me changing names
editUserInSpace: function(user, $editedField) {  
        $.ajax({   
            type: 'PUT',
               url: userURL + data.id,
               data: user,
               success: function(editedUser) {    
                  console.log("I WAS CHANGED: ", editedUser);    
                  console.log($editedField);   
                var $editedField  = $('this');
                var userText = $editedField.parent().css('display', 'none');   
                var userID = $editedField.parent().siblings('').text(
                    editedBitter.bitter);   
                var  = $editedField.parent().siblings('h3').html('');   
            },
               failure: function(editedUser) {    
                console.log('IM STILL A FAILURE: ', editedBitter);   
            }  
        }) 
    },



    editUserInSpace: function() {
 	    $('.messages').on(function(event){
 	      if (event) {
 	        var newUsername = $(this).text();
 	        var userData = {user: newUsername};
 	        var userID = $(this).closest.data(userData);
 	        event.preventDefault();

  // Juan and Sally inspired
    $.ajax({
 	        method:'PUT',
 	        url: chatPage.userUrl + "/" + userID.userid,
 	        data: userData,
 	          success: function(data){
 	            console.log("Success",data);
 	          },
 	          failure: function(data){
 	            console.log("Failed");
            }
 	        });
 	      }
 	    });
 	  },
// var global
// var global
// $.ajax({
//             method: 'PUT',
//             success: function(data) {
//                newUserId: data
//                url: chatPage.url + user._id,
//                     success: function(data) {
//                         global = data
//                     }
//             });

// document.getElementById('userID').value = 'newUserId';
