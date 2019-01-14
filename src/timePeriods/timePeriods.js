import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import TimePeriod from './timePeriod';
import Loader from '../landing/loader';
import { getTimePeriods } from '../requests/timePeriods';

class TimePeriods extends Component {
  state = { timePeriods: [] };

  componentWillMount() {
    const timePeriodUuid = this.props.match.params.uuid;

    getTimePeriods( timePeriodUuid ).
      then(
        timePeriods => this.setTimePeriods( timePeriods )
      );
  }

  setTimePeriods( timePeriods ) {
    this.setState(
      {
        timePeriods: timePeriods
      }
    );
  };

  render() {
    if ( this.state.timePeriods.length > 0 ) {
      return(
        <TimePeriod { ...this.state }/>
      );
    } else {
      return ( <Loader/> )
    }
  };
};

export default TimePeriods;
