const mongoose = require('mongoose');
const schema = mongoose.Schema;
//model -- the "setup" of the document
const searchTermSchema = new schema({

  searchVal : String,
  searchDate : Date
  
}, {timestamps: true}
                                    );

//connects model and connection 
const modelClass = mongoose.model('searchTerms', searchTermSchema);

module.exports = modelClass;