import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

const Header = () => <div>Header</div>;

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" component={Header}/>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;