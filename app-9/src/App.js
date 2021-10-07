import React from 'react';
import './App.css';
import Home from './Home';
import Signup from './Signup';
import Details from './Details';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <Router>
      <div>
        <nav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/details">Details</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </nav>
      </div>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/details">
          <Details />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

