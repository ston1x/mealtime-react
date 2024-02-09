import { useState, ChangeEvent } from 'react';

export const IngredientField = ({ ingredients, addIngredient, removeIngredient }) => {
  // Track the user input
  const [userInput, setUserInput] = useState(' ');

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      if (userInput.trim() !== '') {
        addIngredient(userInput);
        setUserInput('');
      }
    }
  };

  return (
    <div className="flex flex-col w-[300px] md:w-[400px]">
      <input
        name="keyword_ingredients"
        type="text"
        placeholder="Add an ingredient"
        className="w-full border border-gray-300 rounded-md px-4 py-2"
        onKeyDown={handleKeyPress}
        onChange={handleInputChange}
        value={userInput}
      />

      <div className="flex flex-row flex-wrap gap-3 mt-4">
        {ingredients.map((ingredient, index) => (
          <span
            key={`${index}-${ingredient}`}
            className="inline-flex items-start justify-start px-3 py-2 rounded-[32px] text-sm shadow-sm font-medium bg-blue-100 text-blue-800 mr-2"
          >
            {ingredient}
            <button
              className="ml-2 hover:text-blue-500"
              onClick={() => removeIngredient(ingredient)}
              title={`Remove ${ingredient}`}
            >
              &times;
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default IngredientField;
