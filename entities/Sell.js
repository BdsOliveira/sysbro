const mongoose = require('mongoose');

const Sell = mongoose.model('Sell', {
    nameSeller: String,
    companySeller: String,
    quantitySold: Number,
    date: Date
});

module.exports = Sell;