const initialState = {
    cities: []
}

const cityReducer = (state = initialState, action) => {

    switch(action.type){

        case 'GET_CITIES':
            return Object.assign({}, state, {cities: action.cities});

        default:
            return state;

    }
};

export default cityReducer;