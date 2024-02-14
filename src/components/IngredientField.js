import { useState, useEffect, useRef, ChangeEvent } from 'react';

export const IngredientField = ({ ingredients, addIngredient, removeIngredient }) => {
  // Track the user input
  const [userInput, setUserInput] = useState('');

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const ingredientsRef = useRef();

  const scrollToBottom = () => {
    if (ingredientsRef.current) {
      ingredientsRef.current.scrollTop = ingredientsRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    // Scroll to bottom of ingredient list when new ingredients are added
    scrollToBottom();
  }, [ingredients]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();

      if (userInput.trim() !== '') {
        addIngredient(userInput);
        setUserInput('');
      }
    }
  };

  return (
    <div className="flex flex-col w-[300px] md:w-[400px]">
      <p className="text-sm py-4 text-gray-600 dark:text-gray-400">What's at your disposal? Add comma-separated ingredients</p>
      <input
        name="keyword_ingredients"
        type="text"
        placeholder="Add an ingredient"
        className="w-full border rounded-full dark:bg-slate-700 dark:text-white border-gray-300 dark:border-gray-800 rounded-md px-4 py-2"
        onKeyDown={handleKeyPress}
        onChange={handleInputChange}
        value={userInput}
      />

      <div className="flex flex-row flex-wrap gap-3 mt-4 max-h-40 overflow-y-scroll" ref={ingredientsRef}>
        {ingredients.map((ingredient, index) => (
          <span
            key={`${index}-${ingredient}`}
            className="inline-flex items-start justify-start px-3 py-2 rounded-[32px] text-sm shadow-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-700 dark:text-sky-100 mr-2"
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
