const express             = require('express');
const itineraryController = require('../controller/itinerary');
const itineraryRouter     = express.Router();

itineraryRouter.get('/all', itineraryController.getitineraries);
itineraryRouter.get('/:itineraryId', itineraryController.getitinerary);

module.exports = itineraryRouter;