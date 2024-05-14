//validate user input forlogin/register
const Joi = require('joi');

function validLogin(info) {
const loginSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(4).max(32).required()
});
return loginSchema.validate(info);
}

function validRegister(info) {
const registerSchema = Joi.object({
    username: Joi.string().alphanum().min(1).max(16).required(),
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(4).max(32).required()
});
return registerSchema.validate(info);
}

module.exports = {
    validLogin : validLogin,
    validRegister : validRegister
}