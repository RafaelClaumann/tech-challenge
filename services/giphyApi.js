const axios = require('axios')

module.exports = {
  async getGifUrl(title) {
    const giphyUrl = `http://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}`

    const response = await axios.get(`${giphyUrl}&q=${title}&limit=1`)
    const { data: [{ url }] } = response.data
    return url
  }
};
