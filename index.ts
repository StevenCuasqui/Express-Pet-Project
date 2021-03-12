const express = require('express');
const app = express();

app.use(function(request, response, next) {
    console.log("In comes a " + request.method + " to " + request.url); 
    next();
});

app.use(function(request, response) { 
    response.writeHead(200, { "Content-Type": "text/plain" }); 
    response.end("Hello, world!");
});

app.listen(8000);    