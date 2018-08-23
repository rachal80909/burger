// Require the following npm packages inside of the server.js file:
//     *
//     express *
//     body - parser

var express = require("express");
var bodyparser = require("bodyparser");

// Prompt the user to provide location information.
inquirer.prompt([

    {
        type: "input",
        name: "userInput",
        message: "Which location or landmark would you like to geocode?"
    }

    // After the prompt, store the user's response in a variable called location.
]).then(function(location) {

    // console.log(location.userInput);

    // Then use the Google Geocoder to Geocode the address
    geocoder.geocode(location.userInput, function(err, data) {

        console.log(JSON.stringify(data, null, 2));
    });

});