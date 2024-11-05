import Joi from 'joi';

export default {
    login: Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required()
    }),

    signup: Joi.object().keys({
        firstname: Joi.string().required().min(3),
        lastname: Joi.string().required().min(3),
        email: Joi.string().email().required(),
        // tel: PhoneNumber().required(),
        password: Joi.string().required().min(6),
    })
}