const Joi = require('joi');

const categorySchema = Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    description: Joi.string().min(2).max(30).required(),
})

module.exports = categorySchema