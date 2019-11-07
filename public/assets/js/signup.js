$(document).ready(function(){
    console.log("I am here at the beginning !");
    // Checks if two strings are the same value
    function passwordValid(a,b){
        if(a===b)
            return true;
        else 
            return false;
    };

    // A function for creating an author. Calls getAuthors upon completion
    function postUser(userData) {
        $.post("/api/user", userData)
        .then(function(result){
            console.log("User has been created succesfully ! ");
            console.log(result);
        });
    };

    // Post to the DB to check if the username exists
    function queryUser(userName){
        $.get("/api/user/" + userName, function(data){
            if(data == "")
                return false;
            else
                return true;
        })
        .then(function(result){
            console.log(result);
        });
    };

    //Handles the sign-up validation
    function handleSignUp(){
        console.log("I am here to sign up !");
        var userNameInput = $("#user-name").val().trim();
        var firstNameInput = $("#first-name").val().trim();
        var lastNameInput = $("#last-name").val().trim();
        var passwordInput = $("#password").val().trim();
        var passwordCheckInput = $("#password-check").val().trim();
        var dateOfBirth = $("#date-of-birth").val().trim();

        if(passwordValid(passwordInput,passwordCheckInput)){
                var usernameEntered = $("#user-name").val().trim();
                console.log("I am here at the password valid field !");
                console.log('usernameEntered',usernameEntered);
                // Check to see if the current username exists in the database
                // Query the database with a where clause of the username
                // If the query is empty proceed to the insert
                // Else return a validation error

                if(queryUser(usernameEntered)){
                    // $(".signup-validation").text("Username already exists !");
                }
                else {
                    var user = {
                    userName: userNameInput,
                    firstName: firstNameInput,
                    lastName: lastNameInput,
                    password: passwordInput,
                    dateOfBirth: dateOfBirth};
                    
                    console.log("I am user-name");
                    console.log(user);

                    try{
                        postUser(user)
                    } catch(err){
                        console.log(err);
                    };

                    window.location.href="index.html";
                };   
        }else{
            // $(".signup-validation").text("The Password entered does not match the check password !");
        };

    };

    $("#submit-user").on("click", function(){
        event.preventDefault();
        handleSignUp();
    });
});