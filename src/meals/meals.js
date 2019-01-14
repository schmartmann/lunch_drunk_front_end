import React, { Component } from 'react';

const Meals = ( { location, history, match } ) => {
  const mealUuid = match.params.uuid;
  console.log( mealUuid );
  return(
    <div className="meals">
      Meals Index
    </div>
  );
};

export default Meals;
