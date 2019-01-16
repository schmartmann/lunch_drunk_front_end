import React, { Component } from 'react';
import Tooltip from '../app/tooltip';

const TimePeriod = ( { timePeriod } ) => {
  const text = `Meals: ${ timePeriod.meals.length }`;

  return(
    <div>
      <span className="name">
        { timePeriod.name }
      </span>
      <Tooltip hover={ timePeriod.hover } text={ text } />
    </div>
  );
};


export default TimePeriod;
