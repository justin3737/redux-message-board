import * as types from '../constants/ActionTypes';

/* List: 加入留言列表 */
export const addList = (message, user) => {
    return {
        type: types.ADD_LIST,
        message,
        user
    };
};

/* List: 刪除留言 */
export const delList = (id) => {
    return {
        type: types.DEL_LIST,
        id
    };
};

/* List: 編輯留言 */
export const editList = (id, message) => {
    return {
        type: types.EDIT_LIST,
        id,
        message
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
