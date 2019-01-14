import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TimePeriod extends Component {
  render() {
    return this.props.timePeriods.map(
      timePeriod => {
        var url = `${ timePeriod.uuid }`;

        return( <Link to={ url } key={ timePeriod.uuid }>{ timePeriod.name }. Meals: { timePeriod.meals.length }</Link> );
      }
    )
  }
}

export default TimePeriod;
