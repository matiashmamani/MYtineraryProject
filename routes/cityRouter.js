const express        = require('express');
const cityController = require('../controllers/cityController');
const cityRouter     = express.Router();

cityRouter.get('/', cityController.getCities);
cityRouter.get('/:cityId', cityController.getCity);
cityRouter.get('/img/:cityId', cityController.getImageCity);
cityRouter.post('/', cityController.saveCity);

module.exports = cityRouter;