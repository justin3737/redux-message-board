import * as types from '../constants/ActionTypes';

let listId = 1;

const getNowTime = () => {
    var date = new Date();
    var str = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    return str;
};

const list = (state, action) => {
    switch (action.type) {
        case types.ADD_LIST:
            return {
                id     : listId++,
                message: action.message,
                user   : action.user,
                user_id: action.user.toUpperCase(),
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
        case types.DEL_LIST:
            return state.filter((list)=> {
                return action.id !== list.id;
            });
        default:
            return state;
    };
};

export default lists;
