import React, { Component } from 'react';
import TimePeriodsIndex from './timePeriodsIndex';
import TimePeriodShow from './timePeriodShow';
import './timePeriods.scss';


const TimePeriodsContainer = ( { location, history, match } ) => {
  const timePeriodUuid = match.params.uuid;

  var view  = <TimePeriodsIndex/>;

  if ( timePeriodUuid ) {
    view = <TimePeriodShow timePeriodUuid={ timePeriodUuid }/>
  }

  return(
    <div className="container">
      <div className="time-periods">
        <span className="header">Time Periods</span>
        { view }
      </div>
    </div>
  );
};

export default TimePeriodsContainer;
