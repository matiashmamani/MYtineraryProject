const mongoose = require('mongoose');

let CitiesSchema = mongoose.Schema({
    name: String,
    country: String
  });

  let Citie = mongoose.model('Citie', CitiesSchema, collection);

module.exports = mongoose.model("cities", CitiesSchema);