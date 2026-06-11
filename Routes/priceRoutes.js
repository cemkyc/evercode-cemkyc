const express = require('express');

const router = express.Router();

const repository = require('../Repository/currencyRepository');

router.get('/', async (req, res) => {

  const { currency } = req.query;

  const result = await repository.findByTicker(currency);

  if (!result) {
    return res.status(404).json({
      message: "Currency not found"});
  }

  res.json({
    ticker: result.ticker,
    price: result.price
  });

});

module.exports = router;