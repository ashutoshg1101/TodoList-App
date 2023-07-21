//jshint esversion:6
const express = require("express");

const bodyParser = require("body-parser");

const app = express();

let items = [];

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.set('view engine','ejs');

app.get("/",function(req,res){
    var options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
let today  = new Date();

let day = today.toLocaleDateString("en-US", options);

    res.render("list",{kindOfDay: day , newItems: items});   
});

app.post("/",function(request,response){
    let item = request.body.newTask;

    items.push(item);

    response.redirect("/");
})

app.listen(3000,function(){
    console.log("listening on 3000");
})