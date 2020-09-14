import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Login';

const Header = () => <div>Header</div>;

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" component={Header} />
        </div><hr></hr>
        <div>
          <Login/>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;