var db = require("../models");


module.exports = function(app){


// SURVEY ROUTES

// all surveys

app.get("/api/survey", function(req, res){
    db.survey.FindALL({}).then(function(data){
        res.json(data)
    });
});
// specific survey by id
app.get("/api/surveyid", function(req, res){
    db.survey.FindALL({
        where:{
            id: req.params.surveyid
        }
    }).then(function(data){
        res.json(data)
    });
});



// USER ROUTES

// get all users
    app.get("/api/user", function(req, res){
    db.user.findAll({}).then(function(data){
        res.json(data);
    });
});

// Create a user

    app.post("/api/user", function(req, res){
    db.user.create({ 
        where: { 
            username: req.body.username,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            password: req.body.password
        }, 
    }).then(function(data){
        res.json(data);
    });
});



}