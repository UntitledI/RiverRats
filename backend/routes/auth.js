const express = require ('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../db/users')
const dboperations = require('../db/dboperations/user');
const jwtGenerator = require('../Utils/jwtGen');
const validator = require('../middleware/inputValidator');

router.get('/', (req, res) => {
    res.render('welcome.ejs');
}) 


router.get('/login', (req, res) => {
    res.render('login.ejs');
})

router.post('/login', validator('login'), async (req, res) => {
    try{
        const user = await dboperations.userEmailExists(req.body.email);
        if(user.rows.length === 0) {
            return res.status(401).json({error :"Email is incorrect"});
        }

        const validPassword = await bcrypt.compare(req.body.password, user.rows[0].password);

        if(!validPassword) {
            return res.status(401).json({error :"Password is incorrect"});
        }


        jwtGenerator(user.rows[0].id, res);

        res.status(201).json({
            id: user.rows[0].id,
            username: user.rows[0].username,
            email: user.rows[0].email
        });       
 
    }
    catch(err) {
        console.error(err.message);
        res.status(500).json({error:"Server Error"});
    }

})

router.post('/logout', async (req, res) => {
    try{
        res.cookie("jwt", "", {maxAge:0});
        res.status(200).json({message: "logged out"});
    }
    catch(err) {
        console.error(err.message);
        res.status(500).json({error:"Server Error"});
    }

})

router.post('/register', validator('register'), async (req, res) => {
    try{
        const user_email = await dboperations.userEmailExists(req.body.email);
        if(user_email.rows.length !== 0){
            return res.status(401).json({error:"Email already in use!"})
        }

        const user_name = await dboperations.userNameExists(req.body.username);
        if(user_name.rows.length !== 0){
            return res.status(401).json({error:"Username taken!"})
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const newUser = await dboperations.addUser(req.body.username, req.body.email, hashedPassword);

            jwtGenerator(newUser.rows[0].id, res);

            res.status(201).json({
                id: newUser.rows[0].id,
                username: newUser.rows[0].username,
                email: newUser.rows[0].email
            });       


    }
    catch(err) {
        console.error(err.message);
        res.status(500).json({errir:"Server Error"});
    }
})

module.exports = router;