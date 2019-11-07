const express    = require('express');
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');

const City = require('./City');

const app   = express();
const port  = process.env.PORT || 5000;    
const dbUri = 'mongodb+srv://matias123:matias123@mytinerarycluster-ymxpj.mongodb.net/myDatabase?retryWrites=true&w=majority';

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

mongoose.connect(dbUri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(res => {
        console.log('DB Connection successfully!');
        app.listen(port);
        console.log('Magic happens on port ' + port);  
    }).catch(err => {
        throw err;
});

app.get('/cities/all', (req, res) => {

    City.find({}, (err, cities) => {

        if (err) return res.status(500).send({message: `Error: ${err}`});
        if (!cities) return res.status(404).send({message: 'Cities do not exist'});
        
        res.status(200).send({ cities });
    });

});

app.get('/cities/:cityId', (req, res) => {

    let cityId = req.params.cityId;

    City.findById(cityId, (err, city) => {
        if (err) return res.status(500).send({message: `Error: ${err}`});
        if (!city) return res.status(404).send({message: `Not found: cityId ${cityId} does not exist`});
        
        res.status(200).send({ city });
    })
 
});

app.post('/city', (req, res) => {
    let city = new City()
    city.name = req.body.name;
    city.country = req.body.country;

    city.save((err, cityStored) => {
        if (err) res.status(500).send({message: `Error when saving city: ${err}`});
        
        res.status(200).send({city: cityStored});
    });
});

/*
var router = express.Router();

router.get('/', function(req, res) {
    res.send('im the home page!');  
});

router.get('/test', function(req, res) {
    res.send('HELLO WORLD'); 
});

app.use('/', router); */
