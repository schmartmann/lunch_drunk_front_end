import React, { Component } from 'react';

const IngredientMeals = ( { expanded, meals } ) => {
  if ( meals && meals.length > 0 ) {
    var view = meals.map( meal =>
      <li className="meal" key={ meal.uuid }>
        { meal.name }
      </li>
    );

    return(
      <ul className={ `ingredient-meals ${ expanded ? 'visible' : 'hidden' }` }>
        <li>contained in:</li>
        <ul>
          { view }
        </ul>
      </ul>
    );
  } else {
    return null;
  }
};

export default IngredientMeals;
