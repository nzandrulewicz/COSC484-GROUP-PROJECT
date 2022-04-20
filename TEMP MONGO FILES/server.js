// LEARNED FROM: https://www.youtube.com/watch?v=ZhqOp1Dkuso

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://Polish:Polish@cluster0.t8e5u.mongodb.net/Database?retryWrites=true&w=majority", {useNewUrlParser: true}, {useUnifiedTopology: true});

// Create data model
const signupSchema = {
    email: String,
    username: String,
    password: String
}

const Users = mongoose.model("Users", signupSchema);

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {
    let newUser = new Users({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    newUser.save();
    res.redirect("/");
});

app.listen(3000, function() {
    console.log("Server is running on 3000")
});
