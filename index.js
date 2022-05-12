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

// Connecting to database
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@projects-backend.8algy.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
    .then(() => {
        console.log('Database connected sucessfully.');
    })
    .catch((err) => console.log(err))