import axios from '../api'

const recipeService = {
  searchRecipes: (ingredients) => {
    console.log('Sending request...');
    return axios.get('/recipes', { params:  { ingredients } });
  },
};

export default recipeService;