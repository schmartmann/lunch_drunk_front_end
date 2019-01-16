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

          //set a hover attribute on each timePeriod, only used in UI
          timePeriods.forEach( timePeriod => timePeriod.hover = false );

          this.setState(
            {
              timePeriods: timePeriods
            }
          );
        }
      );
  }

  toggleHover( uuid, state ) {
    var timePeriods = this.state.timePeriods;
    var timePeriod = timePeriods.find( timePeriod => timePeriod.uuid === uuid );
    var index = timePeriods.indexOf( timePeriod );
    timePeriod.hover = state;
    timePeriods.splice( index, 1, timePeriod );
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
          <Link
            className="time-period"
            onMouseOver={ this.toggleHover.bind( this, timePeriod.uuid, true ) }
            onMouseLeave={ this.toggleHover.bind( this, timePeriod.uuid, false ) }
            to={ `/time_periods/${ timePeriod.uuid }/meals` }
            key={ timePeriod.uuid }>
              <TimePeriod timePeriod={ timePeriod }/>
          </Link>
        )
      );
    }

    return view;
  };
};

export default TimePeriodsIndex;
