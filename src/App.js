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
    <div className="App py-4">
      <h1 className="text-6xl pt-6 pb-4 font-black text-center bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
        Dinner time ✨
      </h1><span className='text-6xl'></span>
      <section className="h-screen w-screen flex justify-center gap-y-4">
        <form>
          <IngredientField
            ingredients={ingredients}
            addIngredient={handleAddIngredient}
            removeIngredient={handleRemoveIngredient}
          />

          {/* TODO: Make a button component */}
          <button
            onClick={handleSubmit}
            className="button w-full inline-flex justify-center rounded-full border border-transparent bg-indigo-600 py-3 px-4 text-lg font-bold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Search recipes
          </button>
        </form>
      </section>
    </div>
  );
}

export default App;
