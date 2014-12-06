var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.listen(8080);
var tweets = [];
app.get("/",function(req,res){
    res.send("hi");
});
app.post("/send",bodyParser.urlencoded({ extended: false }),function(req,res){
    if(req.body && req.body.tweet){
        tweets.push(req.body.tweet);
        res.send({status:"ok",messages:"tweet received"});
    }else{
        res.send({status:"nok",messages:"no tweet received"});
    }
});
app.get("/tweets",function(){
    res.send(tweets);
});
console.log("server in 8080");