import React, { Component } from 'react';
import MealsIndex from './mealsIndex';
import './meals.scss';

const isShufflePath = ( path ) => {
  path = path.split( '/time_periods/:timePeriodUuid' )[ 1 ]
  return path.includes( '/meals_shuffle' ) || path.includes( '/meals_shuffle/:uuid' )
}

const MealsContainer = ( { location, history, match } ) => {
  const { timePeriodUuid, uuid } = match.params;

  const shuffle = isShufflePath( match.path );

  const mealUuid = match.params.uuid || location.search.split( '?uuid=' )[ 1 ] || null;

  return(
    <div className="container">
      <MealsIndex mealUuid={ uuid } timePeriodUuid={ timePeriodUuid } shuffle={ shuffle }/>
    </div>
  );
};

export default MealsContainer;
