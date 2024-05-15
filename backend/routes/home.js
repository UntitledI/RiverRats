const express = require ('express');
const router = express.Router();
const dboperations = require('../db/dboperations');
const authenticate = require('../middleware/jwtAuth');

router.get("/", authenticate, async (req, res) => {
    try{
        const user = await dboperations.findUser(req.user);
        res.json(user.rows[0]);

    } catch(err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
})


module.exports = router;