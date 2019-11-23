import { GET_ITINERARIES_BY_CITY } from './types';

export const getItinerariesByCity = (cityId) => {
    return (dispatch) => {
        fetch(`http://localhost:5000/itineraries/${cityId}`)
            .then(response => response.json())
            .then(result => dispatch({
                type: GET_ITINERARIES_BY_CITY,
                payload: result.itineraries
            }))
            .catch(err => console.log(err));
    }
}