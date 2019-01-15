import React, { Component } from 'react';
import IngredientsIndex from './ingredientsIndex';
import './ingredients.scss';

const IngredientsContainer = ( { location, history, match } ) => {
  return <IngredientsIndex ingredientUuid={ match.params.uuid }/>;
};

export default IngredientsContainer;
