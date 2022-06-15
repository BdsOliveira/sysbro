const express = require("express");
const app = express();

const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: '*'
}));

app.use(express.static(__dirname + '/public'));
/*  app.get('/', (req, res) => {
    res.sendFile((__dirname + '/public/index.html'));
}); */

const routerSells = require('./routes/SellRoutes');
app.use('/sells', routerSells);

module.exports = app;