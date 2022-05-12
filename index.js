const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const path = require('path');

const mongoose = require('mongoose');

/* const Chart = require('chart.js');
const myChart = new Chart(); */

app.use(cors({
    origin: '*'
}));

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});

// Connecting to database
mongoose.connect('mongodb://localhost:27017/')
    .then(() => {
        console.log('Local database succesfully connected.');
    })
    .catch((err) => console.error(err));