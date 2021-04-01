const axios = require('axios')
const createCard = require('../validation/createCardValidation') 
require('dotenv').config()

const apiKey = process.env.API_KEY
const apiToken = process.env.API_TOKEN
const baseUrl = `https://api.trello.com/1/cards`

module.exports = {
    async create(req, res) {
        const isValidate = createCard.validate(req.body)
        if(isValidate.error) {
            res.status(422).send('Error')
            return
        }

        const {cardName} = req.body
        const {email} = req.body
        const {desc} = req.body
        const {tags} = req.body
        const {checkBox} = req.body
        const {completed} = req.body
        const idList = '60660338b0cbe11cba7ef3d0'

        axios.post(`${baseUrl}?key=${apiKey}&token=${apiToken}&idList=${idList}&name=${cardName}&desc=${desc}&idLabels=${tags}&pos=${checkBox}&dueComplete=${completed}`)
        .then((response) => {
            res.status(200).send('Sucess')
        })
        .catch((error) => {
            console.error(error.message)
        })
    }
}