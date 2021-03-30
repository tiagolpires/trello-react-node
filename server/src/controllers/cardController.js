const axios = require('axios')
require('dotenv').config()

const apiKey = process.env.API_KEY
const apiToken = process.env.API_TOKEN
const baseUrl = `https://api.trello.com/1/cards`

module.exports = {
    async create(req, res) {
        try {
            const {name} = req.body
            const {email} = req.body
            const {desc} = req.body
            const idList = '60627e4d0c12d660d658642e'

            axios.post(`${baseUrl}?key=${apiKey}&token=${apiToken}&idList=${idList}&name=${name}`)
            .then((response) => {
                res.send('Ok')
            })
            .catch((error) => {
                console.error(error.message)
            })

        } catch (error) {
            console.error(error.message)
        }
    }
}