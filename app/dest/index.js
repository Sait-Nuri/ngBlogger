/*
 ngblogger 2017-08-13 
*/

"use strict";const express=require("express"),bodyParser=require("body-parser"),app=express();var PORT=process.env.PORT||8080;app.use(express.static(__dirname+"/assets")),app.use(express.static(__dirname+"/server")),app.use(bodyParser.urlencoded({extended:!0})),app.get("/",function(e,s){s.sendFile(__dirname+"/index.html")}),app.use(bodyParser.json()),app.listen(PORT,function(){console.log("Node app is running on port",PORT)});