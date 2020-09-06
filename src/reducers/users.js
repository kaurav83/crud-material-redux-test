import {
    GET_USERS,
    CREATE_USER,
    EDIT_USER,
    DELETE_USER,
    USER_ERROR
} from '../actions/types';

const initialState = {
    users: [],
    user: null,
    loading: true,
    error: {}
};

export default (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case GET_USERS:
            return {
                ...state,
                users: payload,
                loading: false
            };
        case CREATE_USER:
            return {
                ...state,
                users: [payload, ...state.users],
                loading: false
            };
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user => user.id !== payload),
                loading: false
            };
        case EDIT_USER:
            return {
                ...state,
                users: state.users.map(user => 
                    user.id === payload.id ? payload.user : user
                ),
                loading: false
            };
        case USER_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        default:
            return state;
    }
};