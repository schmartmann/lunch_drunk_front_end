import React, { Component } from 'react';
import Meal from './meal';
import { getMeals } from '../requests/meals';

const Meals = ( { location, history, match } ) => {
  // getMeals();
  // const mealUuid = match.params.uuid;
  // console.log( mealUuid );
  return(
    <div className="meals">
      Meals Index
    </div>
  );
};

export default Meals;
