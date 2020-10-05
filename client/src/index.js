import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from "react-router-dom";

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './styles/theme';

import reducers from './store/reducers';

import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Registration from './pages/Registration';
import ErrorPage from './pages/ErrorPage';

const store = createStore(reducers, {}, applyMiddleware());

ReactDom.render(
	<Router>
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<CssBaseline />
				<Switch>
					<Route exact path="/">
						<Login />
					</Route>
					<Route exact path="/forgot-password">
						<ForgotPassword />
					</Route>
					<Route exact path="/registration">
						<Registration />
					</Route>
					<Route path="*">
						<ErrorPage />
					</Route>
				</Switch>
			</Provider>
		</ThemeProvider>
	</Router>
	,
	document.querySelector('#app')
);