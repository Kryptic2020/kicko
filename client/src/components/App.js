import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Test from './Test';
import Login from './Login';

const Header = () => <div>Header</div>;

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Test} />
          <Route path="/Login" component={Login} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;