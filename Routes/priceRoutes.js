const express = require('express');

const router = express.Router();

const currencies = require('../Storage/currencyStorage');
const { getPrices } = require('../Services/binanceService');

router.get('/', async (req, res) => {
  const { currency } = req.query;

  const exists = currencies.find(c => c.ticker === currency);

  if (!exists) {
    return res.status(404).json({ message: 'Currency not found' });
  }

  try {
    const data = await getPrices();

    const filtered = data.filter(item =>
      item.symbol.includes(currency)
    );

    res.json(filtered);
  } catch (e) {
    res.status(500).json({ message: 'Binance error' });
  }
});

module.exports = router;