import React, { Component } from 'react';
import Tooltip from '../components/tooltip';
import Emoji from '../components/emoji';

const TimePeriod = ( { timePeriod } ) => {
  const text = `Meals: ${ timePeriod.meals.length }`;

  return(
    <div>
      <span className="name">
        <Emoji symbol={ timePeriod.emoji } label={ timePeriod.emoji }/>
        { timePeriod.name }
      </span>
      <Tooltip hover={ timePeriod.hover } text={ text } />
    </div>
  );
};


export default TimePeriod;
