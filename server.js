// require the built-in the HTTP node module (no need to npm install)
var http = require("http");

// define the ports we want to listen to
var PORTONE = 8000;
var PORTTWO = 8080;


// functions to handle requests, one for each server

function handleRequestOne(request, response) {
    response.end("Always belive something wonderful is about to happen.");
}

function handleRequestTwo(request, response) {
    response.end("Never trust a computer you can't throw out a window.");
}

// create servers using the HTTP package to take in handleRequest functions as callbacks

var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);