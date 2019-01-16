import React, { Component } from 'react';
import Loader from '../landing/loader';
import Emoji from '../components/emoji';

import MealRandomizer from './mealRandomizer';
import MealIngredients from './mealIngredients';

import { getTimePeriods } from '../requests/timePeriods';
import { getMeals, shuffleMeals } from '../requests/meals';

const queryTimePeriod = ( timePeriodUuid ) => {
  return new Promise(
    ( resolve, reject ) => {
      getTimePeriods( timePeriodUuid ).
        then(
          timePeriods => {
            var timePeriod = timePeriods.find(
              timePeriod => timePeriod.uuid === timePeriodUuid
            );

            resolve( timePeriod );
          }
        ).
        catch(
          error => {
            reject( error );
          }
        );
    }
  );
}

const queryMeals = ( timePeriod, mealUuid ) => {
  return new Promise(
    ( resolve, reject ) => {
      getMeals( timePeriod.uuid ).
        then(
          meals => {
           //set a expanded attribute on each meal, only used in UI
           meals.forEach( meal => meal.expanded = false );

           resolve( [ timePeriod, meals ] );
         }
       ).
       catch(
         error => {
           reject( error )
         }
       );
    }
  );
};

const queryMealsShuffle = ( timePeriod, mealUuid ) => {
  return new Promise(
    ( resolve, reject ) => {
      shuffleMeals( timePeriod.uuid, mealUuid ).
        then(
          meals => {
           //set a expanded attribute on each meal, only used in UI
           meals.forEach( meal => meal.expanded = false );

           resolve( [ timePeriod, meals ] );
         }
       ).
       catch(
         error => {
           reject( error )
         }
       );
    }
  );
};

class MealsIndex extends Component {
  state = { timePeriod: null, meals: [], previousMealUuid: null };

  componentWillMount() {
    const { timePeriodUuid, shuffle } = this.props;

    queryTimePeriod( timePeriodUuid ).
      then(
        timePeriod => {
          return shuffle ? queryMealsShuffle( timePeriod ) : queryMeals( timePeriod );
        }
      ).
      then(
        results => {
          var newState = {
            timePeriod: results[ 0 ],
            meals: results[ 1 ]
          };

          if ( shuffle ) {
            newState.previousMealUuid = newState.meals[ 0 ].uuid
          }

          this.setState( newState );
        }
      ).
      catch(
        error => console.log( error )
      )
  };

  componentWillReceiveProps( nextProps ) {
    if ( nextProps.shuffle ) {
      queryMealsShuffle( this.state.timePeriod, this.state.previousMealUuid ).
        then(
          results => {
            var newState = {
              timePeriod: results[ 0 ],
              meals: results[ 1 ],
              previousMealUuid: results[ 1 ][ 0 ].uuid
            };

            this.setState( newState );
          }
        ).
        catch(
          error => console.log( error )
        );
    }
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

  renderSectionHeader( timePeriod ) {
    if ( timePeriod ) {
      return(
        <span className="header">
          <Emoji symbol={ timePeriod.emoji } label={ timePeriod.emoji } />
          { timePeriod.name }
        </span>
      )
    }
    else {
      return null;
    }
  };

  renderMeals( meals ) {
    if ( meals && meals.length > 0 ) {
      return meals.map(
        meal => (
          <div className="meal" key={ meal.uuid } onClick={ this.toggleMeal.bind( this, meal.uuid ) }>
            <span className="name">
              <Emoji symbol={ meal.emoji } label={ meal.emoji } />
              { meal.name }
            </span>
            <MealIngredients ingredients={ meal.ingredients } expanded={ meal.expanded }/>
          </div>
        )
      );
    } else if ( meals && meals.length === 0 ) {
      return null;
    } else {
      return( <Loader/> );
    }
  };

  renderRandomizer( meals ) {
    if ( meals && meals.length > 0 ) {
      return(
        <MealRandomizer
          timePeriodUuid={ this.props.timePeriodUuid }
          previousMealUuid={ this.state.previousMealUuid }
        />
      );
    } else {
      return null;
    }
  }

  render() {
    const { timePeriod, meals } = this.state;
    return (
      <div className="meals">
        { this.renderSectionHeader( timePeriod ) }
        { this.renderRandomizer( meals ) }
        { this.renderMeals( meals ) }
      </div>
    )
  }
};

export default MealsIndex;
