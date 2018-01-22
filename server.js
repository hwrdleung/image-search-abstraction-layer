

// init project
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var bing = require('node-bing-api')({accKey: 'PASTEKEYHERE'});

app.use(express.static('public'));
app.use(bodyparser.json());
app.use(cors());

//get calls
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/api/latest/imagesearch", function(request, response) {
  //get recent searches from database
  //display recent searches in JSON format
});

app.get("/api/imagesearch/:searchVal*", function(request, response){
  //get userInput
  //get offset from userInput
  //save search query to search history in database
  //perform search
  //display search results in JSON format
  
  var { searchVal } = request.params;
  var { offset } = request.query;
  
  response.json({
    searchVal,
    offset
  });
  
});
        

        



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
