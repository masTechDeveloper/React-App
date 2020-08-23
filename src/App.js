import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './conponents/layout/navbar';
import { About } from './conponents/layout/About';
import { Shop } from './conponents/layout/Shop';
import { Home } from './conponents/layout/Home';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/shop' component={Shop} />
      </Switch>
    </Router>
  );
}

export default App;
