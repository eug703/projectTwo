$(document).ready(function(){
    console.log("I am here at the beginning !");
    // Checks if two strings are the same value
    function passwordValid(a,b){
        if(a===b)
            return true;
        else 
            return false;
    };
    // A function for generating a post method to a user
    function postUser(userData) {
            $.post("/api/user", userData)
            .then(function(error, result){
                // console.log("User has been created succesfully ! ");
                // console.log(result);
                window.location.href="/";
            });
      
    };
    //Handles the sign-up validation
    function handleSignUp(){
        console.log("I am here to sign up !");
        var userNameInput = $("#user-name").val().trim();
        var firstNameInput = $("#first-name").val().trim();
        var lastNameInput = $("#last-name").val().trim();
        var passwordInput = $("#password").val().trim();
        var passwordCheckInput = $("#confirm-password").val().trim();
        var dateOfBirth = $("#date-of-birth").val().trim();
        if(passwordValid(passwordInput,passwordCheckInput)){
                var usernameEntered = $("#user-name").val().trim();
                console.log("I am here at the password valid field !");
                console.log('usernameEntered',usernameEntered);
                // Creates a new user in the database
                    var user = {
                    userName: userNameInput,
                    firstName: firstNameInput,
                    lastName: lastNameInput,
                    password: passwordInput,
                    dateOfBirth: dateOfBirth};
                    // Console logs the current user object for sanity checking
                    console.log("I am user-name");
                    console.log(user);
                    postUser(user);                    
                    // window.location.replace('/');
        }else{
            $(".signup-validation").text("The Password entered does not match the confirm password.");
        };
    };
    $("#user-signup").on("click", function(){
        event.preventDefault();
        handleSignUp();
    });
});