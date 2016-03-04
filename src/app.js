import './common/lib';
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import msgApp from './reducers';
import Root from './containers/root';

const store = (window.devToolsExtension ? 
	window.devToolsExtension()(createStore) : createStore)(msgApp);

render(
	<Provider store={store}>
		<Root />
	</Provider>,
	document.getElementById('root')
);
