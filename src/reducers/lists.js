import * as types from '../constants/ActionTypes';

export const getNowTime = () => {
    var date = new Date();
    var str = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    return str;
};

const list = (state, action) => {
    switch (action.type) {
        case types.ADD_LIST:
            return {
                id     : action.id,
                message: action.message,
                user   : action.user.toUpperCase(),
                time   : getNowTime()
            };
        default:
            return state;
    };
};

const lists = (state = [], action) => {
    switch (action.type) {
        case types.ADD_LIST:
        	return [
        		...state,
        		list(undefined, action)
        	];
        default:
            return state;
    };
};

export default lists;
