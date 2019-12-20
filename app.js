const express         = require('express');
const bodyParser      = require('body-parser');
const cityRouter      = require('./routes/cityRouter');
const itineraryRouter = require('./routes/itineraryRouter');
const userRouter      = require('./routes/userRouter');
const cors            = require('cors');
const app             = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/cities', cors(), cityRouter);
app.use('/itineraries', cors(), itineraryRouter);
app.use('/users', cors(), userRouter);

module.exports = app;
