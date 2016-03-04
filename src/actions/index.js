import * as types from '../constants/ActionTypes';

let listId = 0;

/* List: 加入留言列表 */
export const addList = (message, user) => {
    return {
        type: types.ADD_LIST,
        id  : listId++,
        message,
        user
    };
};

/* Modal: 更改 user 名稱 */
export const updateUser = (user) => {
    return {
		type : types.UPDATE_USER,
		user,
    };
};

/* Modal: 更改 message */
export const updateMsg = (message) => {
    return {
        type   : types.UPDATE_MESSAGE,
        message,
    };
};

/* Modal: 顯示隱藏 modal */
export const toggleModal = (visible) => {
    return {
        type   : types.TOGGLE_MODAL,
        visible
    };
};
