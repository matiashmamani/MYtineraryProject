const initialState = {
    isFetching: false,
    cities: []
}

const cityReducer = (state = initialState, action) => {

    switch(action.type){

        case 'FETCH_LOADING':
            return {
                ...state,
                isFetching: true
            }

        case 'GET_CITIES':
            return {
                isFetching: false, 
                cities: action.payload
            };

        default:
            return state;

    }
};

export default cityReducer;