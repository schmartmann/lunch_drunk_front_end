import React, { Component } from 'react';

function formatUnits( unit ) {
  const units = {
    'fl_oz': 'fl oz',
    'fl_pt': 'fl pt',
    'fl_qt': 'fl qt'
  };

  return units[ unit ] || unit;
};

const MealIngredients = ( { expanded, ingredients } ) => {
  var ingredientsArr = <li>No ingredients current associated</li>;

  if ( ingredients && ingredients.length > 0 ) {
    ingredientsArr = ingredients.map( ingredient =>
      <li className="ingredient" key={ ingredient.uuid }>
        { ingredient.quantity } { formatUnits( ingredient.unit ) } { ingredient.name }
      </li>
    );
  }

  var container = (
    <ul className={ `meal-ingredients ${ expanded ? 'visible' : 'hidden' }` }>
      <li>ingredients</li>
      <ul>
        { ingredientsArr }
      </ul>
    </ul>
  );

  return container;
};

export default MealIngredients;
