const itinerary = require('../model/itinerary');

function getItinerary(req, res){

    let itineraryId = req.params.itineraryId;

    itinerary.find({cityId: itineraryId})
        .populate('cityId')
        .then(itineraries =>{
            if (!itineraries.length) return res.status(404).send({message: `Not found: itineraryId ${itineraryId} does not exist`});
            res.status(200).send({ itineraries });
        })
        .catch(err => {
            if (err) return res.status(500).send({message: `Error: ${err}`});
        });
}

function getItineraries(req, res){

    itinerary.find({}, (err, itineraries) => {

        if (err) return res.status(500).send({message: `Error: ${err}`});
        if (!itineraries) return res.status(404).send({message: 'itineraries do not exist'});
        
        res.status(200).send({ itineraries });
    });
}

module.exports = {
    getItinerary,
    getItineraries
}