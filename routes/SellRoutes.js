const router = require('express').Router();

const sellController = require('../controllers/SellController');

// Return a list of all sells 
router.get('/', sellController.getAllSells);

// Return a existing sell 
router.get('/:sellID', sellController.getOneSell)

// Return a list of all sells in a range date
router.get('/:beginDate/:endDate', sellController.getSellsFromDate)

// Register a new sell
router.post('/', sellController.createNewSell)

// Update an existing sell 
router.patch('/:sellID', sellController.updateOneSell)

// Delete an existing sell 
router.delete('/:sellID', sellController.deleteOneSell)

module.exports = router;