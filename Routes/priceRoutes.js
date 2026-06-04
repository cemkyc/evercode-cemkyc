const express = require('express');
const currencyRepository = require('../Repository/currencyRepository');
const { getPrices } = require('../Services/binanceService');

const router = express.Router();

router.get('/', async (req, res) => {
  const { currency } = req.query;

  const exists =
    await currencyRepository.findByTicker(
      currency
    );

  if (!exists) {
    return res.status(404).json({
      message: 'Currency not found'
    });
  }

  try {
    const data = await getPrices();

    const filtered = data.filter(item =>
      item.symbol.includes(currency)
    );

    res.json(filtered);

  } catch (error) {
    res.status(500).json({
      message: 'Binance error'
    });
  }
});

module.exports = router;