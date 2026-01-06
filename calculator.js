const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post('/', function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var sum = num1 + num2;
    res.send("Result: " + sum);
});

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalc.html");
});

app.post("/bmicalculator", function(req, res){
    var w = Number(req.body.weight);
    var h = Number(req.body.height);
    var r = w/(h*h);
    res.send("Your BMI is: " +r);
})

app.listen(3005, function(){
    console.log("Server started");
});