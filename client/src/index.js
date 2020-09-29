import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './styles/theme';

import Login from './pages/Login';
import reducers from './store/reducers';

const store = createStore(reducers, {}, applyMiddleware());

ReactDom.render(
	<ThemeProvider theme={theme}>
		<Provider store={store}>
			<CssBaseline />
			<Login />
		</Provider>
	</ThemeProvider>
	,
	document.querySelector('#app')
);