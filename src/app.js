import './common/lib';
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import msgApp from './reducers';
import AppContainer from './containers/AppContainer';

/* use redux devTools of chrome extension */
const store = (window.devToolsExtension ? 
	window.devToolsExtension()(createStore) : createStore)(msgApp);

render(
	<Provider store={store}>
		<AppContainer />
	</Provider>,
	document.getElementById('root')
);
