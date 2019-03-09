import React from 'react';
import './Recipes.scss'

const Recipes = props => (
  <div className="content">
    {
      props.recipes.map((recipe) => {
        return (
          <div key={ recipe.recipe_id } className="content__recipes">
            <img src={recipe.image_url} alt={recipe.title} title={recipe.title} />
            <p>{ recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 25)} ...` }</p>
            <button>View Recipe</button>
          </div>
        )
      })
    }
  </div>
);

export default Recipes;
