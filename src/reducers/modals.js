import * as types from '../constants/ActionTypes';

let initialState = {
    visible: false,
    message: '',
    user   : '',
    user_id: ''
};

const modals = (state = initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_MODAL:
            return {
                ...state,
                visible: action.visible
            };
        case types.UPDATE_USER:
            return {
                ...state,
                user   : action.user,
                user_id: action.user.toUpperCase()
            };
        case types.UPDATE_MESSAGE:
            return {
                ...state,
                message: action.message
            };
        default:
            return state;
    };
};

export default modals;
