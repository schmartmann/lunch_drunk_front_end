import React, { Component } from 'react';

class TimePeriod extends Component {
  render() {
    const { timePeriod } = this.props;
    return(
      <div className="time-period">
        { timePeriod.name } ( Meals: { timePeriod.meals.length } )
      </div>
    )
  }
};

export default TimePeriod;
