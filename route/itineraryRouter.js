const express             = require('express');
const itineraryController = require('../controller/itinerary');
const itineraryRouter     = express.Router();

itineraryRouter.get('/all', itineraryController.getItineraries);
itineraryRouter.get('/:itineraryId', itineraryController.getItinerary);

module.exports = itineraryRouter;