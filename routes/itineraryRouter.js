const express             = require('express');
const itineraryController = require('../controllers/itineraryController');
const itineraryRouter     = express.Router();

itineraryRouter.get('/', itineraryController.getItineraries);
itineraryRouter.get('/:cityId', itineraryController.getItinerariesByCity);
itineraryRouter.get('/img/:profilePic', itineraryController.getImageProfile);

module.exports = itineraryRouter;