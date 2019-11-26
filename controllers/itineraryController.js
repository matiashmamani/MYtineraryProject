const Itinerary = require('../models/itinerary');
const fs        = require ('fs');

function getItinerariesByCity(req, res){

    let cityId = req.params.cityId;

    Itinerary.find({cityId: cityId})
        .populate('cityId')
        .then(itineraries =>{            
            if (!itineraries.length){
                return res.status(404).send({message: `Not found: itineraries with cityId ${cityId} do not exist`});
            }
            res.status(200).send({ itineraries });
        })
        .catch(err => {
            if (err) return res.status(500).send({message: `Error: ${err}`});
        });
}

function getItineraries(req, res){

    Itinerary.find({}, (err, itineraries) => {

        if (err) return res.status(500).send({message: `Error: ${err}`});
        if (!itineraries) return res.status(404).send({message: 'itineraries do not exist'});
        
        res.status(200).send({ itineraries });
    });
}

function getImageProfile(req, res){
    fs.readFile(`../MYtineraryProject/img/profiles/${req.params.profilePic}.png`, (err,data)=>{
        if(err) return res.send().status(404);
        res.write(data);
        return res.end();
    });
}

module.exports = {
    getItinerariesByCity,
    getItineraries,
    getImageProfile
}