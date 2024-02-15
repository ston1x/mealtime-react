import { useState } from  'react';

export const RecipesList = ({ recipes }) => {
  const [userInput, setUserInput] = useState('');

  return(
    <section>
      <div className="mt-4 flex flex-wrap justify-center dark:bg-slate-900">
        {recipes.map((recipe, index) => (
          <div key={index} href="#" className="block max-w-sm mx-4 my-8 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 place-items-center">
            {/* Render individual recipe information */}
            <img className="rounded-lg inline-block mb-4" src={recipe.image} alt={recipe.image} />
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{recipe.title}</h5>
            <span className="bg-yellow-100 text-yellow-800 text-s font-medium me-2 mx-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                {recipe.category}
            </span>
            <div className='font-bold dark:text-white'>
              Match: {(recipe.score * 100).toFixed(2)}% • 
              ⭐️ {recipe.ratings}
              <p>Prep time: {recipe.prep_time}</p>
              <p>Cook time: {recipe.cook_time}</p>
              <ul className="list-disc font-normal text-left text-gray-700 dark:text-gray-400">
                {recipe.ingredients.map((ingredient) => <li>{ingredient}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecipesList;
