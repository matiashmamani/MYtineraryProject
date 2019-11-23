import { GET_CITIES, CITIES_LOADING } from './types';

export const getCities = () => {
    return (dispatch) => {
        fetch('http://localhost:5000/cities')
            .then(response => response.json())
            .then(result => dispatch({
                type: GET_CITIES,
                payload: result.cities
            }))
            .catch(err => console.log(err));
    }
}

export const setCitiesLoading = () => {
    return (dispatch) => {
        dispatch({
            type: CITIES_LOADING,
        });
    }
}