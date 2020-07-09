const express = require('express')
const routes = express.Router()

const recipeController = require('./controllers/recipeController')

routes.get('/recipes', recipeController.fetch)

module.exports = routes
