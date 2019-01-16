import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './app.scss';

import Navigation from '../components/nav';
import Footer from '../components/footer';

import Landing from '../landing/landing';
import TimePeriodsContainer from '../timePeriods/timePeriodsContainer';
import MealsContainer from '../meals/mealsContainer';
import IngredientsContainer from '../ingredients/ingredientsContainer';

class App extends Component {
  render() {
    return(
      <Router>
        <div className="app-container">
          <Navigation />
          <Route path="/" exact component={ Landing } />
          <Route path="/time_periods" exact component={ TimePeriodsContainer } />
          <Route path="/time_periods/:timePeriodUuid/meals" exact component={ MealsContainer } />
          <Route path="/time_periods/:timePeriodUuid/meals/:uuid" exact component={ MealsContainer } />
          <Route path="/time_periods/:timePeriodUuid/meals_shuffle" exact component={ MealsContainer } />
          <Route path="/time_periods/:timePeriodUuid/meals_shuffle/:uuid" exact component={ MealsContainer } />
          <Route path="/ingredients" exact component={ IngredientsContainer } />
          <Route path="/ingredients/:uuid" exact component={ IngredientsContainer } />
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
