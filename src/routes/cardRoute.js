const express = require('express')

const routes = express.Router()

const CardController = require('../controllers/cardController')

routes.post('/card', CardController.create)

routes.get('/', (req, res) => {
    res.json({teste: 'deubom'})
})

module.exports = routes