const Joi = require('joi');

const FooterSchema = Joi.object().keys({
    imageURL: Joi.string().required()
})

module.exports = FooterSchema