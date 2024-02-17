import axios from '../api';

const recipeService = {
  searchRecipes: (ingredients, orderBy) => {
    return axios.get('/recipes', { params: { ingredients, order_by: orderBy } });
  }
};

export default recipeService;
