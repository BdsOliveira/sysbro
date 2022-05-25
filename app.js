const express = require("express");
const app = express();

const cors = require('cors');
const path = require('path');

const routerSells = require('./routes/SellRoutes');
app.use('/sells', routerSells);

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({
    origin: '*'
}));

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

module.exports = app;