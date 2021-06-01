const express = require('express');
const userRoute = require('./routes/user').router;
const articleRoute = require('./routes/article').router;

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});



/* app.use((req, res, next) => {
    res.json({message: "coucou"});
    next();
}) */

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use((req, res, next) => {
    res.status(200);
    next();
})

app.use('/api/auth/', userRoute);
app.use('/api/articles/', articleRoute);

module.exports = app;