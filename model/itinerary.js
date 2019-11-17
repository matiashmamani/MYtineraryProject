const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const ItinerarySchema = Schema({
    title: {
        type: String
    },
    
    profilePic: {
        type: String
    },
    
    rating: {
        type: Number
    },
    
    duration: {
        type: Number
    },
    
    price: {
        type: Number
    },
    
    hashtag: {
        type: Array
    }

/*     cityId: {
        type: Schema.mongoose.type.ObjectId
    } */
});

module.exports = mongoose.model('Itinerary', ItinerarySchema);