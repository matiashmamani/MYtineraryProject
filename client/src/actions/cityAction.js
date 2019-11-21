import { GET_CITIES, CITIES_LOADING } from './types';

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