const express = require('express');
const userRouter = require('./user');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.listen(9023, function() {
    console.log('express start success on port: 9023');
});

app.use(cookieParser());
app.use(bodyParser.json());

app.use('/user', userRouter);