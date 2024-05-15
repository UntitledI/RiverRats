const jwt = require('jsonwebtoken');


function jwtGenerator(userid) {
    const payload = {
        userid: userid
    }

    return jwt.sign(payload, process.env.JWTSECRET, {expiresIn: "12hr"})
}

module.exports = jwtGenerator;