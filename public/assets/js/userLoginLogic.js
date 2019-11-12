$(document).ready(function(){
    console.log("Here I am in the User Login Logic");
    function passwordValid(a,b){
        if(a===b)
            return true;
        else 
            return false;
    };
    // A function for sending a get request of user/password information
    // function getLogin(username,password) {
    //     var queryResult;
    //         $.get("/api/login/" + username)
    //         .then(function(result){
    //             passwordStoredInDB = result[0].password;
    //             console.log(result[0]);
    //             console.log(passwordStoredInDB);
    //         });
    // };

    //Handles the sign-up validation
    function handleLogin(){
        let passwordStoredInDB;
        let userId;
        let userNameInput = $("#user-name").val().trim();
        let passwordInput = $("#password").val().trim();
        $.get("/api/login/" + userNameInput)
        .then(function(result){
            passwordStoredInDB = result[0].password;
            userId = result[0].id;
            if(passwordValid(passwordStoredInDB,passwordInput)){                
                // The retrieved ID of the user is saved in session storage
                // This will later be used to handle matching and saving user answers to the survey
                sessionStorage.setItem("user_id",userId);
                // Do a GET to the "/surveyanswer" route to decide on which page to redirect the user.
                $.get("/api/surveyanswers/" + sessionStorage.getItem("user_id"))
                .then(function(result){
                    // If the result is empty direct them to window.location("/survey")
                    if(result.length == 0)
                        window.location.replace("/survey");
                    // // Else take them to window.location("/matches")
                    else
                        window.location.replace("/matches");
                });
            } else {
                $("#login-validation").text("The user/password entered is invalid for the given user/password.");
            };
        }).catch(function(err){
            $("#login-validation").text("The user/password entered is invalid for the given user/password.");
            throw err;
        });
    };
    // User login on click function
    $("#user-login").on("click", function(){
        event.preventDefault();
        handleLogin();
    });
});