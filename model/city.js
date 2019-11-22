const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const CitySchema = Schema({
    name: String,
    country: String,
    itineraries: [{
        type: Schema.Types.ObjectId,
        ref: 'Itinerary'
    }]
});

module.exports = mongoose.model('City', CitySchema);