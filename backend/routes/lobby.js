const express = require ('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const dboperations = require('../db/dboperations/lobby');
const authenticate = require('../middleware/jwtAuth');

router.get("/", authenticate, async (req, res) => {
    try{
        const lobby = await dboperations.getOpenLobbies();
        res.json(lobby);
    }
    catch(err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
})

router.post('/', authenticate, async (req, res) => {
    try{
        const hostId = req.user.rows[0].id;
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const lobby = await dboperations.createPrivateLobby(hostId, req.body.name, hashedPassword, req.body['player capacity']);
        res.json(lobby);
 
    }
    catch(err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }

})


module.exports = router;