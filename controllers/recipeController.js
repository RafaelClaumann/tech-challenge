const puppy = require('../services/recipePuppyApi')
const giphy = require('../services/giphyApi')

module.exports = {
  async fetch(req, res) {
    const keywords = req.query.i.split(',')
    if (testKeywordsLength(keywords)) {
      return res.status(403).send({ ErrorMessage: 'Erro! São aceitos apenas 3 ingredientes!' })
    }
    try {
      const response = await puppy.getRecipes(req.query.i)
      const { results } = response.data

      const recipes = await Promise.all(
        results.map(async recipe => {
          const ingredients = sortIngredients(recipe.ingredients)
          const title = recipe.title.trim()
          const gif = await giphy.getGifUrl(title)

          return {
            title,
            ingredients,
            link: recipe.href,
            gif
          }
        })
      )

      return res.send({ keywords, recipes })
    } catch (error) {
      return res.send(error)
    }
  }
};

const testKeywordsLength = (keywords) => {
  return (keywords.length > 3) ? true : false
};

const sortIngredients = (ingredients) => {
  return ingredients
    .split(',')
    .map((cur) => cur.trim())
    .sort((a, b) => a.localeCompare(b))
};
