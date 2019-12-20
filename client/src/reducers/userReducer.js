import { USER_CREATED } from '../actions/types';

const initialState = {
    user:{}
}

const userReducer = (state = initialState, action) => {

    switch(action.type){

        case USER_CREATED:
            return {
                ...state,
                user: action.payload
            };

        default:
            return state;

    }
};

export default userReducer;