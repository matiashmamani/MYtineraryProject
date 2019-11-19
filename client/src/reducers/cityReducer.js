import { GET_CITIES, CITIES_LOADING, SET_ACTIVE_ITINERARY } from '../actions/types';

const initialState = {
    loading: false,
    cities: [],
    activeItinerary: null
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

        case SET_ACTIVE_ITINERARY:
            return {
                ...state,
                activeItinerary: action.payload
            };

        default:
            return state;

    }
};

export default cityReducer;