const express = require ('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../db/users')
const dboperations = require('../db/dboperations');
const jwtGenerator = require('../Utils/jwtGen');


router.get('/login', (req, res) => {
    res.render('login.ejs');
})

router.post('/login', async (req, res) => {
    try{
        const user = await dboperations.userExists(req.body.email);

        if(user.rows.length === 0) {
            return res.status(401).json("Email/Password is incorrect");
        }

        const validPassword = await bcrypt.compare(req.body.password, user.rows[0].password);

        if(!validPassword) {
            return res.status(401).json("Email/Password is incorrect");
        }

        const token = jwtGenerator(user.rows[0].userid);

        res.json({token});
 
    }
    catch(err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }

})

router.get('/register', (req, res) => {
    res.render('register.ejs');
})

router.post('/register', async (req, res) => {

    try{
        const users = await dboperations.userExists(req.body.email);
        if(users.rows.length !== 0){
            return res.status(401).send("User already exists")
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const newUser = await dboperations.addUser(req.body.username, req.body.email, hashedPassword);

        const token = jwtGenerator(newUser.rows[0].userid);

        res.json({token});  
    }
    catch(err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
})


module.exports = router;