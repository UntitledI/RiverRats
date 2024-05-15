const Joi = require('joi');

const register = Joi.object({
    username: Joi.string().alphanum().min(1).max(16).required(),
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(4).max(32).required()
});

const login = Joi.object({
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(4).max(32).required()
});

module.exports = {
    register,
    login
}