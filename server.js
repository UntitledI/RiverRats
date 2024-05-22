require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require ('cors');
const app = express();
const createHttpError = require('http-errors')
const {createServer} = require('http');
const httpServer = createServer(app);

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());


const authRoute = require('./backend/routes/auth');
const lobbyRoute = require('./backend/routes/lobby');


app.use(express.json());

//middleware

app.use('/', authRoute);
app.use('/lobby', lobbyRoute);

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