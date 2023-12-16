const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())

function logResponseBody(jsonBody){
    console.log(jsonBody);
}

function callbackFn(result){
    result.json().then(logResponseBody);
}

var sendObj = {
    method: "GET"
};

fetch("http://localhost:3000/handleSum?counter=5",sendObj).then(callbackFn)