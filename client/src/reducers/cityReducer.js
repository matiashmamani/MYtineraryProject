const initialState = {
    cities: []
}

const cityReducer = (state = initialState, action) => {
    console.log(state);
    switch(action.type){

        case 'GET_CITIES':
            return Object.assign({}, state, {cities: action.cities});
/*             return {
                cities: [...state.cities, action.cities]
            }; */

        default:
            return state;

    }
};

export default cityReducer;