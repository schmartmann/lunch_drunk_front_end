import React, { Component } from 'react';
import Loader from '../landing/loader';
import Emoji from '../components/emoji';

import IngredientMeals from './ingredientMeals';
import { getIngredients } from '../requests/ingredients';

class IngredientsIndex extends Component {
  state = { ingredients: [] };

  componentWillMount() {
    getIngredients( this.props.ingredientUuid ).
      then(
        ingredients => {
          //set a expanded attribute on each ingredient, only used in UI
          ingredients.forEach( ingredient => ingredient.expanded = false );

          this.setState(
            {
              ingredients: ingredients
            }
          );
        }
      );
  };

  toggleIngredient( uuid ) {
    var ingredients = this.state.ingredients;
    var ingredient = ingredients.find( ingredient => ingredient.uuid === uuid );
    var index = ingredients.indexOf( ingredient );
    ingredient.expanded = !ingredient.expanded;
    ingredients.splice( index, 1, ingredient );

    this.setState(
      {
        ingredients: ingredients
      }
    );
  };

  render() {
    var view = <Loader/>;

    if ( this.state.ingredients.length > 0 ) {
      view = this.state.ingredients.map(
        ingredient => (
          <div
            className="ingredient"
            key={ ingredient.uuid }
            onClick={
              this.toggleIngredient.bind( this, ingredient.uuid )
            } >
            <span className="name">
              <Emoji symbol={ ingredient.emoji } label={ ingredient.emoji }/>
              { ingredient.name }
            </span>
            <IngredientMeals meals={ ingredient.meals } expanded={ ingredient.expanded }/>
          </div>
        )
      );
    }

    return (
      <div className="ingredients">
        <span className="header">Ingredients</span>
        {view}
      </div>
    );
  }
};

export default IngredientsIndex;
