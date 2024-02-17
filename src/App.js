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
  const [recipesRequestError, setREcipesRequestError] = useState(null);
  const [orderBy, setOrderBy] = useState('relevance'); // Default order by relevance
  const [orderDirection, setOrderDirection] = useState('desc'); // Default order direction ascending

  const onOrderByChange = e => {
    setOrderBy(e.target.value)
  }

  const onOrderDirectionChange = e => {
    setOrderDirection(e.target.value)
  }

  // Handle form submission
  const handleSubmit = async () => {
    try {
      const response = await recipeService.searchRecipes(ingredients, orderBy);
      setRecipes(response.data);
      setREcipesRequestError(null);
    } catch (error) {
      setREcipesRequestError('💔 There was a problem connecting to the server');
    }
  };

  return (
    <div className="App py-4 h-screen dark:bg-slate-900">
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
          {/* TODO: Set up as a separate component */}
          <div className='zone adjust-to-parent-full-width text-left mt-4 text-gray-900 dark:text-gray-400 border p-2 rounded-lg border-gray-300 dark:border-gray-800'>
            <p className='mb-1'>Order by:</p>

            <div className='grid grid-cols-2'>
              <div id="order-by-selection">
                <div class="flex items-center">
                  <input id="relevance" type="radio" value="relevance" name="order-by" checked={orderBy === 'relevance'} onChange={onOrderByChange} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"></input>
                  <label for="relevance" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Relevance</label>
                </div>
                <div class="flex items-center">
                    <input id="ratings" type="radio" value="ratings" name="order-by" checked={orderBy === 'ratings'} onChange={onOrderByChange} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="ratings" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ratings</label>
                </div>
                <div class="flex items-center">
                    <input id="ingredients" type="radio" value="ingredients" name="order-by" checked={orderBy === 'ingredients'} onChange={onOrderByChange} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="ingredients" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Amount of ingredients</label>
                </div>
              </div>

              <div id="order-direction">
                <div class="flex items-center">
                  <input id="desc" type="radio" value="desc" name="order-direction" checked={orderDirection === 'desc'} onChange={onOrderDirectionChange} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"></input>
                  <label for="desc" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">desc</label>
                </div>
                <div class="flex items-center">
                    <input id="asc" type="radio" value="asc" name="order-direction" checked={orderDirection === 'asc'} onChange={onOrderDirectionChange} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="asc" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">asc</label>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="button transition duration-150 ease-in-out w-full inline-flex justify-center rounded-full border border-transparent bg-indigo-600 py-3 px-4 text-lg font-bold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Search recipes
          </button>
        </section>
      </section>

      <div className={`text-gray-500 text-lg font-medium py-4 transition-opacity duration-500 ease-in-out ${recipesRequestError ? 'opacity-100' : 'opacity-0'}`}> {recipesRequestError}</div>
      <RecipesList recipes={recipes} orderDirection={orderDirection} />
    </div>
  );
}

export default App;
