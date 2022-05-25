/* const Chart = require('chart.js');
const myChart = new Chart(); */

const app = require('./app');

require('dotenv').config();
app.listen(process.env.PORT || 3000, () => {
    const mongoose = require('mongoose');
    
    console.log(`Server running on port: ${process.env.PORT || 3000}`);

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
});

