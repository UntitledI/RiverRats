const express = require ('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const dboperations = require('../db/dboperations/lobby');
const authenticate = require('../middleware/jwtAuth');

router.get("/", async (req, res) => {
    try{
        const lobby = await dboperations.getOpenLobbies();
        res.status(200).json(lobby);
    }
    catch(err) {
        console.error(err.message);
        res.status(500).json({error:"Server Error"});
    }
})

router.post('/', async (req, res) => {
    try{
        //const hostId = req.user.rows[0].id;
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const lobby = await dboperations.createPrivateLobby(req.body.name, hashedPassword);
        res.status(201).json({
            lobby_id: lobby.rows[0].id,
            username: lobby.rows[0].name
        }); 
 
    }
    catch(err) {
        console.error(err.message);
        res.status(500).json({error:"Server Error"});
    }

})


module.exports = router;