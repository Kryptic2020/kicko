<<<<<<< HEAD
//import 'materialize-css/dist/css/materialize.min.css';
=======
>>>>>>> b4c6b0769838f84600e65543410f3621fe8b58bf
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

<<<<<<< HEAD
import App from './components/App';
import reducers from './reducers';
=======
import Login from './pages/Login';
import reducers from './store/reducers';
>>>>>>> b4c6b0769838f84600e65543410f3621fe8b58bf

const store = createStore(reducers, {}, applyMiddleware());


ReactDom.render(
  <Provider store={store}>
<<<<<<< HEAD
    <App />
  </Provider>,
  document.querySelector('#root')
=======
    <Login />
  </Provider>,
  document.querySelector('#app')
>>>>>>> b4c6b0769838f84600e65543410f3621fe8b58bf
);