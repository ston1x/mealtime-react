import React, { useState } from 'react';
import './App.css';
import useIngredientInput from './hooks/useIngredient';
import IngredientField from './components/search/IngredientField';
import RecipesList from './components/recipes/RecipesList';
import recipeService from './services/recipeService';
import OrderOptions from './components/search/OrderOptions';

function App() {
  // Retrieve all returned items from the hook
  const { ingredients, handleAddIngredient, handleRemoveIngredient } = useIngredientInput();
  const [recipes, setRecipes] = useState([]);
  const [recipesLoading, setRecipesLoading] = useState(false); // Default loading state to false
  const [recipesRequestError, setREcipesRequestError] = useState(null); // Default error state to null
  const [orderBy, setOrderBy] = useState('relevance'); // Default order by relevance
  const [orderDirection, setOrderDirection] = useState('desc'); // Default order direction ascending

  const onOrderByChange = (e) => {
    setOrderBy(e.target.value);
  };

  const onOrderDirectionChange = (e) => {
    setOrderDirection(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async () => {
    try {
      setRecipesLoading(true);
      const response = await recipeService.searchRecipes(ingredients, orderBy);
      setRecipes(response.data);
      setREcipesRequestError(null);
    } catch (error) {
      setREcipesRequestError('💔 There was a problem connecting to the server');
    } finally {
      setRecipesLoading(false);
    }
  };

  return (
    <div className="App py-4 h-screen dark:bg-slate-900">
      <h1 className="text-6xl pt-6 pb-4 font-black text-center bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
        Dinner time ✨
      </h1>
      <span className="text-6xl"></span>
      <section className="w-screen flex justify-center gap-y-4">
        <section>
          <IngredientField
            ingredients={ingredients}
            addIngredient={handleAddIngredient}
            removeIngredient={handleRemoveIngredient}
          />

          <OrderOptions
            orderBy={orderBy}
            onOrderByChange={onOrderByChange}
            orderDirection={orderDirection}
            onOrderDirectionChange={onOrderDirectionChange}
          />

          <button
            onClick={handleSubmit}
            className="button transition duration-150 ease-in-out w-full inline-flex justify-center rounded-full border border-transparent bg-indigo-600 py-3 px-4 text-lg font-bold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Search recipes
          </button>
        </section>
      </section>

      {recipesRequestError !== null ? (
        <div className="text-gray-500 text-lg font-medium py-4">{recipesRequestError}</div>
      ) : (
        <RecipesList recipes={recipes} orderDirection={orderDirection} />
      )}
    </div>
  );
}

export default App;
