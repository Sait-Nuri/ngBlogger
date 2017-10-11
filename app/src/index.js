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

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

async.series([
        function (cb) {
            database = require('./server/db.js');
            database.setup(cb); //Create models
        },
        function (cb) {
            cb(null);
        }],
    function (err, result) {
        if(err){
            throw (err);
        }
    });

app.listen(PORT, function() {
    console.log('Node app is running on port', PORT);
});