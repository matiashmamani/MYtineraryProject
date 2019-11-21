import { GET_ITINERARIES } from './types';

export const getItineraries = (payload) => {

    return {
        type: GET_ITINERARIES,
        payload
    }

}