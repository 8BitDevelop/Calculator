//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({extended: true}));


app.get("/bmicalculator", function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html")
});

app.post("/bmicalculator", function(req,res){
    var w8 = parseFloat(req.body.weight);
    var h8 = parseFloat(req.body.height);
    

    var bmi = w8 / (h8 * h8);

    res.send("Your BMI is " + bmi.toFixed(2));
});

app.listen(port, function(){
    console.log("Server is running on port 3000.");
});