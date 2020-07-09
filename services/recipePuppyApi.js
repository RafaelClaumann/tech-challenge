const axios = require("axios");

module.exports = {
  async getRecipes(ingredients) {
    const response = await axios.get(`http://www.recipepuppy.com/api/?i=${ingredients}`)
    return response
  }
};
