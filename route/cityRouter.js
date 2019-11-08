const express        = require('express');
const cityController = require('../controller/city');
const cityRouter     = express.Router();

cityRouter.get('/all', cityController.getCities);
cityRouter.get('/:cityId', cityController.getCity);
cityRouter.post('/', cityController.saveCity);

module.exports = cityRouter;