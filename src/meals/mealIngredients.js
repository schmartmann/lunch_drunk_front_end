import React, { Component } from 'react';

const MealIngredients = ( { expanded, ingredients } ) => {
  var view = ingredients.map( ingredient =>
    <li className="ingredient" key={ ingredient.uuid }>
      { ingredient.name } { ingredient.quantity } { ingredient.unit }
    </li>
  );

  return(
    <ul className={ `meal-ingredients ${ expanded ? 'visible' : 'hidden' }` }>
      <li>ingredients</li>
      <ul>
        { view }
      </ul>
    </ul>
  )
};

export default MealIngredients;
