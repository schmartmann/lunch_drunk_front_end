import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import Emoji from '../components/emoji';


const MealRandomizer = ( { timePeriodUuid, previousMealUuid } ) => {
  const url = `/time_periods/${ timePeriodUuid }/meals_shuffle/${ previousMealUuid || '' }`;

  return(
    <Link className="meal-randomizer" to={ url }>
      <Emoji symbol="dice" label="dice"/>
      Shuffle Meal
      <Emoji symbol="fingers-crossed" label="fingers-crossed"/>
    </Link>
  )
};

export default MealRandomizer;
