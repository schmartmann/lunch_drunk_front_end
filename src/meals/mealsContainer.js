import React, { Component } from 'react';
import MealsIndex from './mealsIndex';
import './meals.scss';


const MealsContainer = ( { location, history, match } ) => {
  const timePeriodUuid = match.params.timePeriodUuid;
  const mealUuid = match.params.uuid;

  return <MealsIndex timePeriodUuid={ timePeriodUuid }/>
};

export default MealsContainer;
