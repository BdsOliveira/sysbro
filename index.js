const express = require("express");
const app = express();
require('dotenv').config();
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
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@projects-backend.8algy.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
    useNewUrlParser: true
})
    .then(() => {
        console.log(`Database sucessfully connected.`);
    })
    .catch((err) => {
        console.log(err);
    })