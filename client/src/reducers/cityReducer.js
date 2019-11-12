const initialState = {
    isFetching: true,
    cities: []
}

const cityReducer = (state = initialState, action) => {
    switch(action.type){

        case 'GET_CITIES':
            return { isFetching};


        default:
            return state;

    }
};

export default cityReducer;