import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './app.scss';

import Navigation from './nav';
import Landing from '../landing/landing';
import Meals from '../meals/meals';
import Ingredients from '../ingredients/ingredients';

class App extends Component {
  constructor() {
    super();

    this.state = {};
  };

  componentWillMount() {

  }

  render() {
    return(
      <Router>
        <div className="app-container">
          <Navigation />
          <Route path="/" exact component={ Landing } />
          <Route path="/meals" exact component={ Meals } />
          <Route path="/meals/:uuid" component={ Meals } />
          <Route path="/ingredients" exact component={ Ingredients } />
          <Route path="/ingredients/:uuid" exact component={ Ingredients } />
        </div>
      </Router>
    );
  }
}

export default App;
