import { useState } from  'react';

export const RecipesList = ({ recipes }) => {
  const [userInput, setUserInput] = useState('');

  return(
    <section>
      <div className="mt-4">
        {recipes.map((recipe, index) => (
          <div key={index}>
            {/* Render individual recipe information */}
            <h3 className="text-3xl font-medium">{recipe.name}</h3>
            <p>{recipe.ingredients}</p>
            <p>Prep time: {recipe.prep_time}</p>
            <p>Difficulty: {recipe.difficulty}</p>
            {/* Add more details as needed */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecipesList;
