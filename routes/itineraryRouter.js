const express             = require('express');
const itineraryController = require('../controllers/itineraryController');
const itineraryRouter     = express.Router();

itineraryRouter.get('/', itineraryController.getItineraries);
itineraryRouter.get('/:cityId', itineraryController.getItinerariesByCity);

module.exports = itineraryRouter;