const express = require('express')

const routes = express.Router()

const CardController = require('../controllers/cardController')

routes.get('/', CardController.teste)

module.exports = routes