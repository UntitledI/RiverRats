require('dotenv').config();
const express = require('express');
const {createServer} = require('http');


const {Server} = require('socket.io');


const loginRoute = require('./backend/routes/auth/login');
const chatRoute = require('./backend/routes/chat/chat');

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer);


app.use('/', loginRoute);
app.use('/', chatRoute);

app.set('view-engine', 'ejs');
app.use(express.urlencoded({extended: false}));

app.listen(3000)