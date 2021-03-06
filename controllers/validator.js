const joi = require('joi');

const validator = (req, res, next) => {
    const schema = joi.object({
        userName: joi.string().trim().min(2).required().messages({
            "string.empty" : "You must complete the field",
            "string.min": "Your name must be at least 2 characters long"
        }),
        email: joi.string().email().required(),
        password: joi.string().trim().min(6).required().messages({
            "string.empty": "You must complete the field password"
        }),
        userImage: joi.string(),
        country: joi.string(),
        google: joi.boolean() 
    })
    const validation = schema.validate(req.body, { abortEarly: false })
    if (!validation.error) {
        next()
    } else {
        res.json({success: false, errors: validation.error.details})
    }
}

module.exports = validator;