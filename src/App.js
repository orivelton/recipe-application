import React, { Component } from 'react';
import './App.css';

import Form from  './components/Form';

const API_KEY = '9776715f223be5179b2bd752a9b4f431';


class App extends Component {

  state = {
    recipes: []
  }
  
  getRecipe = async (e) => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    const api_call= await fetch(`http://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`);
    const data = await api_call.json();
    console.log(data);
    this.setState({
      recipes: data.recipes
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            Recipe Search
          </h1>
        </header>
        <Form getRecipe={this.getRecipe} />

        {
          this.state.recipes.map((recipe) => {
            return (
              <div key={ recipe.recipe_id }>
                <img src={recipe.image_url} alt={recipe.title} title={recipe.title} />
                <p>{ recipe.title }</p>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;
