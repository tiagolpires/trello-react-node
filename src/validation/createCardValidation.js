const Joi = require('joi')

const cardSchema = Joi.object({
    cardName: Joi.string().required(),
    email: Joi.string().email().required(),
    desc: Joi.string().required(),
    tags: Joi.array().items(Joi.string().required()),
    checkBox: Joi.string().valid("top", "bottom").required(),
    completed: Joi.valid("true", "false").required()
})

module.exports = cardSchema