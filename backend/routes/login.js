const express = require ('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../db/users')
const dboperations = require('../db/dboperations');
const jwtGenerator = require('../Utils/jwtGen');
const validator = require('../middleware/inputValidator');
const authenticate = require('../middleware/jwtAuth');

router.get('/', (req, res) => {
    res.render('welcome.ejs');
}) 


router.get('/login', (req, res, next) => {
    res.render('login.ejs');
})

router.post('/login', validator('login'), async (req, res) => {
    try{
        const user = await dboperations.userEmailExists(req.body.email);

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

router.post('/register', validator('register'), async (req, res) => {
    try{
        const user_email = await dboperations.userEmailExists(req.body.email);
        if(user_email.rows.length !== 0){
            return res.status(401).send("Email already in use!")
        }

        const user_name = await dboperations.userNameExists(req.body.username);
        if(user_name.rows.length !== 0){
            return res.status(401).send("Username taken!")
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

router.get('/verified', authenticate,  async (req, res) => {
    try{
        res.json(true);
    } catch(err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
    
})


module.exports = router;