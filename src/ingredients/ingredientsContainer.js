import React, { Component } from 'react';
import IngredientsIndex from './ingredientsIndex';
import './ingredients.scss';

const IngredientsContainer = ( { location, history, match } ) => {
  const ingredientUuid = match.params.uuid;

  return <IngredientsIndex ingredientUuid={ ingredientUuid }/>
};

export default IngredientsContainer;
