//validate user input forlogin/register
const Joi = require('joi');

const createHttpError = require('http-errors');

const validators = require('../Utils/inputSchema');

module.exports = function(validator) {
    if(!validators.hasOwnProperty(validator))
        throw new Error(`'${validator}' validator does not exist`);

    return async function(req, res, next) {
        try {
            const validated = await validators[validator].validateAsync(req.body)
                req.body = validated;
                next();
            
        } catch(err) {
            if (err.isJoi)
                return res.status(422).json({error:err.message})
            next()
        }
    }
}