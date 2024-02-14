import React, { useState } from 'react';

const useIngredientInput = () => {
  const default_ingredients = ['milk', 'flour', 'sugar', 'salt', 'water', 'butter', 'oil', 'eggs'];
  const [ingredients, setIngredients] = useState(default_ingredients);

  // Function to handle adding the ingredient to the array
  const handleAddIngredient = (ingredient) => {
    setIngredients([...ingredients, ingredient]);
  };

  // Function to remove the ingredient from the array
  const handleRemoveIngredient = (ingredient) => {
    setIngredients(ingredients.filter((i) => i !== ingredient));
  };

  // Return ingredients and functions from the hook
  return { ingredients, handleAddIngredient, handleRemoveIngredient };
};

export default useIngredientInput;
