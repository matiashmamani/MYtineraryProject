const City = require('../models/city');
const fs   = require ('fs');

function getCity(req, res){

    let cityId = req.params.cityId;

    City.findById(cityId)
        .then(cities =>{
            if (!cities){ 
                return res.status(404).send({message: `Not found: cityId ${cityId} does not exist`});
            }
            res.status(200).send({ cities });
        })
        .catch(err => {
            if (err) return res.status(500).send({message: `Error: ${err}`});
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

function getImageCity(req, res){
    fs.readFile(`../MYtineraryProject/img/cities/${req.params.cityId}.png`, (err,data)=>{
        if(err) return res.send().status(404);
        res.write(data);
        return res.end();
    });
}

module.exports = {
    getCity,
    getCities,
    saveCity,
    getImageCity
}