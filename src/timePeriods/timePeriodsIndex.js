import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TimePeriod from './timePeriod';
import Loader from '../landing/loader';
import { getTimePeriods } from '../requests/timePeriods';

class TimePeriodsIndex extends Component {
  state = { timePeriods: [] };

  componentWillMount() {
    getTimePeriods().
      then(
        timePeriods => {
          this.setTimePeriods( timePeriods );
        }
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
    var view = <Loader/>
    if ( this.state.timePeriods.length > 0 ) {
      view = this.state.timePeriods.map(
        timePeriod => (
          <Link to={ `/time_periods/${ timePeriod.uuid }/meals` } key={ timePeriod.uuid }>
            <TimePeriod  timePeriod={ timePeriod } />
          </Link>
        )
      );
    }

    return view;
  };
};

export default TimePeriodsIndex;
