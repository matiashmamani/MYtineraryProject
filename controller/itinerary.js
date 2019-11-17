const itinerary = require('../model/itinerary');

function getitinerary(req, res){

    let itineraryId = req.params.itineraryId;

    itinerary.findById(itineraryId, (err, itinerary) => {
        if (err) return res.status(500).send({message: `Error: ${err}`});
        if (!itinerary) return res.status(404).send({message: `Not found: itineraryId ${itineraryId} does not exist`});
        
        res.status(200).send({ itinerary });
    });
}

function getitineraries(req, res){

    itinerary.find({}, (err, itineraries) => {

        if (err) return res.status(500).send({message: `Error: ${err}`});
        if (!itineraries) return res.status(404).send({message: 'itineraries do not exist'});
        
        res.status(200).send({ itineraries });
    });
}

module.exports = {
    getitinerary,
    getitineraries
}