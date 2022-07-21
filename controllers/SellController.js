const Sell = require('../entities/Sell')
const dateToBrString = require('../services/dateToBrString')
//const addOneHourToDateTime = require('../services/SellService')

const getAllSells = async (req, res) => {
    try {
        let sells = await Sell.find();

        if (sells.length < 1) {
            res.json({ message: "Empty database" });
            return;
        }
        //sells = addOneHourToDateTime(sells)
        res.status(200).json(sells);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};
const getOneSell = async (req, res) => {
    try {
        let sell = await Sell.findOne({ "_id": req.params.sellID })
        if (sell) {
            //sell = addOneHourToDateTime(sell)
            res.status(200).json(sell);
            return;
        }
        res.status(404).json({
            "message": "Cannot find any sell with ID provided",
            "id": req.params.sellID
        });
    } catch (error) {
        res.send("Não deu!")
    }
};
const getSellsFromDate = async (req, res) => {
    // Trecho com erro
    let { beginDate, endDate } = req.params;
    try {
        let sells = await Sell.find({ date: { $gte: beginDate, $lte: endDate } })
        if (sells.length < 1) {
            res.json({ message: "Empty database" });
            return;
        }
        //sells = addOneHourToDateTime(sells)
        res.status(200).json(sells);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};
const createNewSell = (req, res) => {
    let sell = { nameSeller, companySeller, quantityClients, quantityEmploye, date } = req.body
    // Validar os dados depois
    try {
        Sell.create(sell)
        res.status(201).send(sell);
    } catch (error) {
        res.status(500).json({ message: "Not possible to create a new Sell" });
    }
};
const updateOneSell = (req, res) => {
    res.send('Atualizou uma venda especifica');
};
const deleteOneSell = async (req, res) => {
    try {
        const sell = await Sell.deleteOne({ "_id": req.params.sellID })
        res.status(200).json(sell);
    } catch (error) {
        res.send(`Cannot delete sell with id: ${req.params.sellID}`)
    }
};
const deleteAll = async (req, res) => {
    let { firstParam, secondParam, myPersonalKey } = req.params
    if ((firstParam === secondParam) && (firstParam === myPersonalKey)) {
        try {
            let sell = await Sell.deleteMany()
            res.status(200).json({ message: "sucess" })
        } catch (error) {
            res.status().json({ message: 'Erase database failed' })
        }
    }
}

module.exports = {
    getAllSells,
    getOneSell,
    getSellsFromDate,
    createNewSell,
    updateOneSell,
    deleteOneSell,
    deleteAll,
};