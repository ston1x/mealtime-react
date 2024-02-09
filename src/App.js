import React, { useState } from 'react';
import useIngredientInput from './hooks/useIngredient';
import IngredientField from './components/IngredientField';
import './App.css';

function App() {
  // Retrieve all returned items from the hook
  const { ingredients, handleAddIngredient, handleRemoveIngredient } = useIngredientInput();

  // Handle form submission
  const handleSubmit = () => {
    // TODO: Send ingredients to the backend
    console.log(ingredients);
  };

  return (
    <div className="App">
      <form>
        <IngredientField
          ingredients={ingredients}
          addIngredient={handleAddIngredient}
          removeIngredient={handleRemoveIngredient}
        />

        <button onClick={handleSubmit} className="bg-blue-600 text-white outline-none border-none">
          Search recipes
        </button>
      </form>
    </div>
  );
}

export default App;
