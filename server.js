require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require ('cors');
const app = express();
const createHttpError = require('http-errors')
const {createServer} = require('http');
const httpServer = createServer(app);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());


const loginRoute = require('./backend/routes/login');
const homeRoute = require('./backend/routes/home');


app.use(express.json());

//middleware

app.use('/', loginRoute);
app.use('/home', homeRoute);

app.set('view-engine', 'ejs');
app.use(express.urlencoded({extended: false}));

app.use((req, res, next) => {
    next(createHttpError(404));
})

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            status: err.status || 500,
            message: err.message
        }
    })
});



app.listen(3000)