const jwt = require('jsonwebtoken');

function jwtGenerator(userid, res) {
    const payload = {
        userid : userid
    }
    
    const token = jwt.sign(payload, process.env.JWTSECRET, {
        expiresIn: "12hr"});

    res.cookie("jwt", token, {
        maxAge: 15*24*60*60*1000,
        httpOnly: true
    });
}


module.exports = jwtGenerator;