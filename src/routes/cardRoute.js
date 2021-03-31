const express = require('express')

const routes = express.Router()

const CardController = require('../controllers/cardController')

routes.post('/card', CardController.create)

module.exports = routes