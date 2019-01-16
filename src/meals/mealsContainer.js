import React, { Component } from 'react';
import MealsIndex from './mealsIndex';
import './meals.scss';


const MealsContainer = ( { location, history, match } ) => {
  const { timePeriodUuid, uuid } = match.params;

  return(
    <div className="container">
      <MealsIndex mealUuid={ uuid } timePeriodUuid={ timePeriodUuid }/>
    </div>
  );
};

export default MealsContainer;
