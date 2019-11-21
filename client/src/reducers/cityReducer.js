import { GET_CITIES, CITIES_LOADING } from '../actions/types';

const initialState = {
    loading: false,
    cities: []
}

const cityReducer = (state = initialState, action) => {

    switch(action.type){

        case CITIES_LOADING:
            return {
                ...state,
                loading: true
            }

        case GET_CITIES:
            return {
                ...state,
                loading: false, 
                cities: action.payload
            };

        default:
            return state;

    }
};

export default cityReducer;