

// init project
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var bing = require('node-bing-api')({accKey: 'dc55b2fad84a4cd28e6fb44518ce180b'});
var searchTerm = require('./models/searchTerm.js');

app.use(express.static('public'));
app.use(bodyparser.json());
app.use(cors());

mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds163226.mlab.com:63226/noodlesdb/imagesearches');

//get calls
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


app.get("/api/recentsearches", function(request, response) {
  //get recent searches from database
  searchTerm.find({}, (err, data)=>{
    if(err){
     return "Error searching database"; 
    }
    
    //display recent searches in JSON format
    response.json(data);
  });
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
  
  //use your own search api here
  bing.images(searchVal, {
    top: 10,
  }, function(err, response, body){
    if(err){
       return "Error performing image search."; 
    }
    
    response.json(body);
    
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
