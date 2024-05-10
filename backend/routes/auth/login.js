const express = require ('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const dboperations = require('../../db/dboperations');
const config = require('../../db/dbconfig');




router.get('/login', (req, res) => {
    res.render('login.ejs');
    console.log(config);
})

router.post('/login', (req, res) => {

})

router.get('/register', (req, res) => {
    res.render('register.ejs');
})

router.post('/register', async (req, res) => {
    try{
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const randomID = Math.floor(Math.random() * 10000);


        let user = {
            id : randomID,
            username : req.body.username,
            password : hashedPassword,
            email : req.body.email
        };
        console.log(user);
        dboperations.addUser(user).then(result => {
            res.status(201).json(result);
        })     
    } catch{
        res.status(500).send()
    }

})

router.get('/userList', (req, res) => {
    dboperations.getUsers().then(result => {
        console.log(result);
        res.json(result[0]);
    })
})

module.exports = router;