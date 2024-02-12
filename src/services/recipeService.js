import axios from '../api'

const recipeService = {
  searchRecipes: (ingredients) => {
    return axios.get('/recipes', { params:  { ingredients } });
  },
};

export default recipeService;
