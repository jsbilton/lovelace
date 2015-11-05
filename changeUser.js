
changeUserName: function() {
    var newUserId;
    $.ajax({
            url: "http://tiny-tiny.herokuapp.com/collections/lovelace-users",
            method: 'GET',
            success: function(data) {
                newUserId = data
                console.log("Great Success", data);
            }); failure: function(data) {
            console.log("Failure to Communicate");
        }
    }
}
newUserId.filter(function(el) {
    return chatPage.currentUser.name === el.name
});
}


document.getElementById('userID').value = 'newUserId';
