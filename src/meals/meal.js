import React, { Component } from 'react';

class Meal extends Component {
  render() {
    return this.props.meals.map(
      meal => {
        return( <div key={ meal.uuid }>{ meal.name }</div> );
      }
    )
  }
}

export default Meal;
