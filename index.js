const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const path = require('path');

/* const Chart = require('chart.js');
const myChart = new Chart(); */

app.use(cors({
    origin: '*'
}));

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
})

app.listen(PORT);