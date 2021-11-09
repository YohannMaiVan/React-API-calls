import React from 'react';

import { Switch, Route } from 'react-router-dom';
import SearchBar from '../SearchBar/index';
import Product from '../Product/index';

const App = () => {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' exact component={SearchBar} />
        <Route path='/product/:id' component={Product} />
      </Switch>
    </div>
  );
};

export default App;
