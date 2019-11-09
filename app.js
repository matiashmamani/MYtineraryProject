const express    = require('express');
const bodyParser = require('body-parser');
const cityRouter = require('./route/cityRouter');
const cors       = require('cors');
const app        = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/city', cors(), cityRouter);

module.exports = app;
