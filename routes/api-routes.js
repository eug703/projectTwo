var db = require("../models");
module.exports = function(app){
// SURVEY ROUTES
// all surveys
app.get("/api/survey", function(req, res){
    db.Survey.findAll({}).then(function(data){
        res.json(data)
    });
});
// specific survey by id
app.get("/api/survey/:id", function(req, res){
    db.Survey.findAll({
        where:{
            id: req.params.id
        }
    }).then(function(data){
        res.json(data)
    });
});

// USER ROUTES
// get all users
app.get("/api/user/:key", function(req, res){
    db.User.findOne({
        where : {username : req.params.key}
    }).then(function(data){
        res.json(data);
    });
});
//
app.get("/signup", function(req, res){
    res.render('signup')
})
app.get("/survey", function(req, res){
    res.render('survey')
})


// Create a user
app.post("/api/user", function(req, res){
    db.User.create({ 
            username: req.body.username,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            password: req.body.password,
            date_of_birth: req.body.date_of_birth
    }).then(function(data){
        res.json(data);
    });
});
}