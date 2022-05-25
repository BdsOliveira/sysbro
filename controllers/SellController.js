const getAllSells = async (req, res) => {
    try {
        const sells = await Sell.find();

        if (sells.length < 1) {
            res.json({ message: "Empty database" });
            return;
        }
        res.status(200).json(sells);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};
const getOneSell = (req, res) => {
    res.send('Pegou uma venda especifica');

};
const getSellsFromDate = (req, res) => {
    res.send('Pegou as vendas de um pediodo');

};
const createNewSell = (req, res) => {
    res.send('Criou uma nova venda');
    /* let sells = req.body;

    Sell.create(sells)
        .then((result) => {
            res.status(201);
        }).catch((err) => {
            res.status(403).json({ message: "Not possible to create a new Sell" });
        }); */

};
const updateOneSell = (req, res) => {
    res.send('Atualizou uma venda especifica');
};
const deleteOneSell = (req, res) => {
    res.send('Deletou uma venda especifica');

};

module.exports = {
    getAllSells,
    getOneSell,
    getSellsFromDate,
    createNewSell,
    updateOneSell,
    deleteOneSell,
};