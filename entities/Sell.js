const mongoose = require('mongoose');

const Sell = mongoose.model('Sell', {
    nameSeller: String,
    companySeller: String,
    quantityClients: Number,
    quantityEmploye: Number,
    date: Date
});

module.exports = Sell;