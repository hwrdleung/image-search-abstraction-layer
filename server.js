

// init project
var express = require('express');
var app = express();
var mongoose = require('mongoose');

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("latest/imagesearch", function(request, response) {
  //get recent searches from database
  //display recent searches in JSON format
});

app.get("/:userInput", function(request, response){
  //get userInput
  //get offset from userInput
  //save search query to search history in database
  //perform search
  //display search results in JSON format
});
        

        



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
