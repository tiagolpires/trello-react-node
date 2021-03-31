const Joi = require('joi')

const cardSchema = Joi.object({
    cardName: Joi.string().required(),
    email: Joi.string().email().required(),
    desc: Joi.string().required()
})

module.exports = cardSchema