require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require ('cors');
const app = express();
const {createServer} = require('http');


const {Server} = require('socket.io');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());


const loginRoute = require('./backend/routes/auth/login');
const chatRoute = require('./backend/routes/chat/chat');

const httpServer = createServer(app);
app.use(express.json());

const io = new Server(httpServer);

//middleware


app.use('/', loginRoute);
app.use('/', chatRoute);

app.set('view-engine', 'ejs');
app.use(express.urlencoded({extended: false}));

app.listen(3000)