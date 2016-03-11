import * as types from '../constants/ActionTypes';

let listId = 1;

const getNowTime = () => {
    var date = new Date();
    var str = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    return str;
};

const lists = (state = {}, action) => {
    switch (action.type) {
        case types.ADD_LIST:
            const id = listId++;
        	return {
        		...state,
        		[id] : {
                    id,
                    message: action.message,
                    user   : action.user,
                    user_id: action.user.toUpperCase(),
                    time   : getNowTime()
                }
        	};
        case types.DEL_LIST:
            const newState = Object.assign({}, state);
            delete newState[action.id];
            return newState;
        default:
            return state;
    };
};

export default lists;
