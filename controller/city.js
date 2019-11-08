const City = require('../model/city');

function getCity(req, res){

    let cityId = req.params.cityId;

    City.findById(cityId, (err, city) => {
        if (err) return res.status(500).send({message: `Error: ${err}`});
        if (!city) return res.status(404).send({message: `Not found: cityId ${cityId} does not exist`});
        
        res.status(200).send({ city });
    });
}

function getCities(req, res){

    City.find({}, (err, cities) => {

        if (err) return res.status(500).send({message: `Error: ${err}`});
        if (!cities) return res.status(404).send({message: 'Cities do not exist'});
        
        res.status(200).send({ cities });
    });
}

function saveCity(req, res){

    let city = new City()
    city.name = req.body.name;
    city.country = req.body.country;

    city.save((err, cityStored) => {
        if (err) res.status(500).send({message: `Error when saving city: ${err}`});
        
        res.status(200).send({city: cityStored});
    });
}

module.exports = {
    getCity,
    getCities,
    saveCity
}