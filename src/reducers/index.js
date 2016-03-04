import { combineReducers } from 'redux';
import modals from './modals';
import lists from './lists';

const msgApp = combineReducers({
	modals,
	lists
});

export default msgApp;
