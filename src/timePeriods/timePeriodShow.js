import React, { Component } from 'react';
import Loader from '../landing/loader';
import { getTimePeriods } from '../requests/timePeriods';

class TimePeriodShow extends Component {
  state = {
    timePeriod: null,
    meals: []
  }

  componentWillMount() {
    getTimePeriods( this.props.timePeriodUuid ).
      then(
        timePeriods => {
          this.setTimePeriods( timePeriods );
        }
      )
  };

  setTimePeriods( timePeriods ) {
    var timePeriod = timePeriods.find( timePeriod => timePeriod.uuid === this.props.timePeriodUuid )
    console.log( timePeriod );

    this.setState(
      {
        timePeriod: timePeriod
      }
    );
  }

  render() {
    var view = <Loader/>;

    if ( this.state.timePeriod ) {
      view = (
        <div className="time-period">
          <div>{ this.state.timePeriod.name } -- show view</div>
        </div>
      );
    }

    return view;
  };
};

export default TimePeriodShow
