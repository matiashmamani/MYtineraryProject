import { GET_CITIES, CITIES_LOADING, SET_ACTIVE_ITINERARY } from './types';

export const getCities = (payload) => {

    return {
        type: GET_CITIES,
        payload
    }

}

export const setCitiesLoading = () => {

    return {
        type: CITIES_LOADING,
    }

}

export const setActiveItinerary = (payload) => {

    return {
        type: SET_ACTIVE_ITINERARY,
        payload
    }

}