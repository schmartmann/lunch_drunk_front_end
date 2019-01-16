import React, { Component } from 'react';
import IngredientsIndex from './ingredientsIndex';
import './ingredients.scss';

const IngredientsContainer = ( { location, history, match } ) => {
  return(
    <div className="container">
      <IngredientsIndex ingredientUuid={ match.params.uuid }/>
    </div>
  );
};

export default IngredientsContainer;
