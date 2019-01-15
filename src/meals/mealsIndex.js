import React, { Component } from 'react';
import Loader from '../landing/loader';
import MealIngredients from './mealIngredients';
import { getMeals } from '../requests/meals';

class MealsIndex extends Component {
  state = { meals: [] };

  componentWillMount() {
    getMeals( this.props.timePeriodUuid ).
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
    var view = <Loader/>;

    if ( this.state.meals.length > 0 ) {
      view = this.state.meals.map(
        meal => (
          <div className="meal" key={ meal.uuid } onClick={ this.toggleMeal.bind( this, meal.uuid ) }>
            <span>{ meal.name }</span>
            <MealIngredients ingredients={ meal.ingredients } expanded={ meal.expanded }/>
          </div>
        )
      );
    }

    return (
      <div className="meals">
        {view}
      </div>
    )
  }
};

export default MealsIndex;
