const pool = require('./dbconfig');
const bcrypt = require('bcrypt');

async function userExists(email) {
    const user = await pool.query("SELECT * FROM users WHERE email = $1",
        [email]);
        return user;
}


async function addUser(username, email, password) {
    const user = await pool.query("INSERT INTO users (username,email, password) VALUES ($1, $2, $3) RETURNING *", 
        [username, email, password]);
        return user;
}

async function authenticateUser(email, password) { 
    
}

module.exports ={
    userExists : userExists,
    addUser : addUser,
    authenticateUser : authenticateUser
}