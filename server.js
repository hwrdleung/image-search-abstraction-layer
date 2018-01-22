

// init project
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var bing = require('node-bing-api')({accKey: 'PASTEKEYHERE'});
var searchTerm = require('./models/searchTerm.js');

app.use(express.static('public'));
app.use(bodyparser.json());
app.use(cors());

mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds163226.mlab.com:63226/noodlesdb/imagesearches');

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
  var data = new searchTerm ({
    searchVal,
    searchDate: new Date()
  });
  
  data.save(function(err, response){
    if(err){
     return "Error saving to database"; 
    }
    response.json(data);
  });
  
  response.json({
    searchVal,
    offset
  });
  
});
        

        



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
