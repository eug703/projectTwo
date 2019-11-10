$(document).ready(function(){
    var passwordStoredInDB;
    console.log("Here I am in the User Login Logic");
    function passwordValid(a,b){
        if(a===b)
            return true;
        else 
            return false;
    };
    // A function for sending a get request of user/password information
    function getLogin(username,password) {
        var queryResult;
            $.get("/api/login/" + username)
            .then(function(result){
                passwordStoredInDB = result[0].password;
            });
    };
    //Handles the sign-up validation
    function handleLogin(){
        var userNameInput = $("#user-name").val().trim();
        var passwordInput = $("#password").val().trim();
        getLogin(userNameInput,passwordInput);
        console.log(passwordValid(passwordStoredInDB,passwordInput),2000);
        if(setTimeout(passwordValid(passwordStoredInDB,passwordInput),2000)){
            sessionStorage.setItem("user_id",1);
            // window.location.href="../dashboard.html";
            window.location.replace('/survey');
        } else {
            $(".login-validation").text("The user/password entered is invalid for the given user/password.");
        };
    };
    // User login on click function
    $("#user-login").on("click", function(){
        event.preventDefault();
        handleLogin();
    });
});