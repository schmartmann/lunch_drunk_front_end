import React, { Component } from 'react';
import TimePeriodsIndex from './timePeriodsIndex';
import TimePeriodShow from './timePeriodShow';

const TimePeriodsContainer = ( { location, history, match } ) => {
  const timePeriodUuid = match.params.uuid;

  var view;

  if ( timePeriodUuid ) {
    view = <TimePeriodShow timePeriodUuid={ timePeriodUuid }/>
  }
  else {
    view = <TimePeriodsIndex/>
  }
    return(
      <div className="time-periods">
        { view }
      </div>
    );
};

export default TimePeriodsContainer;
