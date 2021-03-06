import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
//import Test from './Test';
//import Login from './Login';
import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';
import Registration from '../pages/Registration';
import ErrorPage from '../pages/ErrorPage';
import CssBaseline from '@material-ui/core/CssBaseline';


const App = () => {
  return (
    <div>
      <CssBaseline/>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={Login} />
            {/*<Route path="/" exact component={Test} />*/}
            <Route path="/forgot-password" exact component={ForgotPassword} />
            <Route path="/registration" exact component={Registration} />
            {<Route path="*" exact component={ErrorPage} />}
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;