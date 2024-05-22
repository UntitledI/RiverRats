const pool = require('../dbconfig');

async function userEmailExists(email) {
    const user = await pool.query("SELECT * FROM users WHERE email = $1",
        [email]);
        return user;
}

async function userNameExists(username) {
    const user = await pool.query("SELECT * FROM users WHERE username = $1",
        [username]);
        return user;
}


async function addUser(username, email, password) {
    const user = await pool.query("INSERT INTO users (username,email, password) VALUES ($1, $2, $3) RETURNING *", 
        [username, email, password]);
        return user;
}

async function findUser(id) { 
    const user = await pool.query("SELECT id, username FROM users WHERE id = $1",
    [id]);
    return user;
    
}

module.exports ={
    userEmailExists : userEmailExists,
    userNameExists : userNameExists,
    addUser : addUser,
    findUser : findUser
}