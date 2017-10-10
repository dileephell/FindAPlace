var mongoose = require("mongoose");

// Define database connection string and use it to open Mongoose connection.
var dbURI = "mongodb://localhost/findaplace";
mongoose.connect(dbURI);


// Listen for Mongoose connection events and output statuses to console
mongoose.connection.on("connected",function(){
    console.log("Mongoose connected to " + dbURI);
});

mongoose.connection.on("error",function(err){
    console.log("Mongoose connection Error: " + err);
});

mongoose.connection.on("disconnected",function(){
    console.log("Mongoose disconnected");
});


// Resuable function to close Mongoose Connection
//Define function to accept messages and callback function
var gracefulShutdown = function(msg, callback) {
    mongoose.connection.on(function() {
        console.log("Mongoose disconnected through" + msg);
        callback();
    });
};


//Listen to Node processes for termination or restart signals, and call gracefulShutdown function when appropriate
//,passing a continuation callback.
// For nodemon restarts
process.once("SIGUSR2", function() {
    gracefulShutdown("nodemon restart", function() {
        process.kill(process.pid, "SIGUSR2");
    });
});

// For app termination
process.on("SIGINT", function() {
     gracefulShutdown("app termination", function() {
         process.exit(0);
     });
});

// For Heroku app termination
process.on("SIGTERM", function()){
    gracefulShutdown("Heroku app shutdown", function() {
        process.exit(0);
    });
};

// BRING IN YOUR SCHEMAS & MODELS
require('./locations')