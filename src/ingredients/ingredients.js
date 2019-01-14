import React, { Component } from 'react';

const Ingredients = ( { location, history, match } ) => {
  const ingredientUuid = match.params.uuid;

  return(
    <div className="ingredients">
      Ingredients Index
    </div>
  );
};

export default Ingredients;
