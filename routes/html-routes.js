var db = require("../models");

module.exports = function(app) {
    app.get("/signup", function(req, res){
        res.render('signup')
    });

    app.get("/survey", function(req, res){
        res.render('survey')
    });

    app.get("/dashboard", function(req, res){
        res.render('dashboard')
    });

    app.get("/matches", function(req,res){
        res.render('matches');
    });
};