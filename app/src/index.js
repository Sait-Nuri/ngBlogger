'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const async = require('async');
var PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/server'));
app.use(express.static(__dirname + '/client'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var database;
var routes;

async.series([
        function (cb) {
            database = require('./server/db.js');
            database.setup(cb); //Create models
        },
        function (cb) {
            routes = require('./server/routes.js')(app, __dirname, database, express);
            routes.setup();
            cb(null);
        }],
    function (err, result) {
        if(err){
            throw (err);
        }else{
            console.log("index is run");
        }
    });

app.listen(PORT, function() {
    console.log('Node app is running on port', PORT);
});