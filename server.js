const express = require('express');

const loginRoute = require('./backend/routes/auth/login');
const chatRoute = require('./backend/routes/chat/chat');

const app = express();

app.use('/', loginRoute);
app.use('/', chatRoute);

app.set('view-engine', 'ejs');
app.use(express.urlencoded({extended: false}));

app.listen(3000)