import React, { Component } from 'react';
import MealsIndex from './mealsIndex';
import './meals.scss';


const MealsContainer = ( { location, history, match } ) => {
  const { timePeriodUuid, uuid } = match.params;

  return <MealsIndex mealUuid={ uuid } timePeriodUuid={ timePeriodUuid }/>;
};

export default MealsContainer;
