import React, { useState } from 'react';
import './App.css';
import useIngredientInput from './hooks/useIngredient';
import IngredientField from './components/IngredientField';
import RecipesList from './components/RecipesList';
import recipeService from './services/recipeService';

function App() {
  // Retrieve all returned items from the hook
  const { ingredients, handleAddIngredient, handleRemoveIngredient } = useIngredientInput();
  const [recipes, setRecipes] = useState([]);

  // Handle form submission
  const handleSubmit = async () => {
    try {
      const response = await recipeService.searchRecipes(ingredients);
      setRecipes(response.data);
    } catch (error) {
      console.error('Error: ', error);
    }
  };

  return (
    <div className="App py-4">
      <h1 className="text-6xl pt-6 pb-4 font-black text-center bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
        Dinner time ✨
      </h1><span className='text-6xl'></span>
      <section className="w-screen flex justify-center gap-y-4">
        <section>
          <IngredientField
            ingredients={ingredients}
            addIngredient={handleAddIngredient}
            removeIngredient={handleRemoveIngredient}
          />

          <button
            onClick={handleSubmit}
            className="button w-full inline-flex justify-center rounded-full border border-transparent bg-indigo-600 py-3 px-4 text-lg font-bold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Search recipes
          </button>
        </section>
      </section>

      <RecipesList recipes={recipes} />
    </div>
  );
}

export default App;
