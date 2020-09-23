import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import CssBaseline from '@material-ui/core/CssBaseline';

import Login from './pages/Login';
import reducers from './store/reducers';

const store = createStore(reducers, {}, applyMiddleware());

ReactDom.render(
  <Provider store={store}>
      <CssBaseline />
      <Login />
  </Provider>,
  document.querySelector('#app')
);