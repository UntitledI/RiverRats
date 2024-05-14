require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require ('cors');
const app = express();
const {createServer} = require('http');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());


const loginRoute = require('./backend/routes/login');

const httpServer = createServer(app);
app.use(express.json());

//middleware


app.use('/', loginRoute);

app.set('view-engine', 'ejs');
app.use(express.urlencoded({extended: false}));

app.listen(3000)