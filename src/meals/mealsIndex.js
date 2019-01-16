import React, { Component } from 'react';
import Loader from '../landing/loader';
import Emoji from '../components/emoji';

import MealIngredients from './mealIngredients';

import { getTimePeriods } from '../requests/timePeriods';
import { getMeals } from '../requests/meals';


class MealsIndex extends Component {
  state = { timePeriod: null, meals: [] };

  componentWillMount() {
    const { timePeriodUuid } = this.props;

    getTimePeriods( timePeriodUuid ).
      then(
        timePeriods => {
          var timePeriod = timePeriods.find(
             timePeriod => timePeriod.uuid === timePeriodUuid
           );

           this.setState(
             {
               timePeriod: timePeriod
             }
           );

           getMeals( timePeriod.uuid ).
             then(
               meals => {
                 //set a expanded attribute on each meal, only used in UI
                 meals.forEach( meal => meal.expanded = false );

                 this.setState(
                   {
                     meals: meals
                   }
                 );
               }
             );
        }
      );
  };

  buildEmojis() {
    var mealEmojis = [
      'fork-and-knife',
      'birthday-cake',
      'poultry-leg',
      'pot-of-food',
      'paella',
      'burrito',
      'hotdog',
      'pizza'
    ];

    return mealEmojis.map( emoji => <Emoji symbol={ emoji } label={ emoji }/> )
  };

  toggleMeal( uuid ) {
    var meals = this.state.meals;
    var meal = meals.find( meal => meal.uuid === uuid );
    var index = meals.indexOf( meal );
    meal.expanded = !meal.expanded;
    meals.splice( index, 1, meal );

    this.setState(
      {
        meals: meals
      }
    );
  };

  render() {
    const { timePeriod } = this.state;
    var view = <Loader/>;
    var header;

    if ( timePeriod ) {
      header = (
        <span className="header">
          <div className="emojis">
            { this.buildEmojis() }
          </div>
          { timePeriod.name }
        </span>
      )
    }
    else {
      header = <div/>
    }

    if ( this.state.meals.length > 0 ) {
      view = this.state.meals.map(
        meal => (
          <div className="meal" key={ meal.uuid } onClick={ this.toggleMeal.bind( this, meal.uuid ) }>
            <span className="name">{ meal.name }</span>
            <MealIngredients ingredients={ meal.ingredients } expanded={ meal.expanded }/>
          </div>
        )
      );
    }

    return (
      <div className="meals">
        { header }
        { view }
      </div>
    )
  }
};

export default MealsIndex;
