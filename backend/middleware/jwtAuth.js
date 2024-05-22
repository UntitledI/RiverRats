const jwt = require('jsonwebtoken');
const { findUser } = require('../db/dboperations/user');

module.exports = async(req, res, next) => {
        try{

        const jwtToken = req.cookies.jwt;
        if(!jwtToken) {
            return res.status(403).json("Unauthorized : No Token");
        }

        const decoded = jwt.verify(jwtToken, process.env.JWTSECRET);

        if(!decoded) {
            return res.status(403).json("Unauthorized : Invalid Token");
        }

        const user = await findUser(decoded.userid);

        if(!user) {
            return res.status(404).json("User not found");
        }

        req.user = user;

        next();

    } catch(err) {
        console.error(err.message);
        return res.status(403).json("Unauthorized");
    }

}
