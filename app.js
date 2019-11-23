const express         = require('express');
const bodyParser      = require('body-parser');
const cityRouter      = require('./routes/cityRouter');
const itineraryRouter = require('./routes/itineraryRouter');
const cors            = require('cors');
const app             = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/cities', cors(), cityRouter);
app.use('/itineraries', cors(), itineraryRouter);

module.exports = app;
