const express = require('express');
const currencies = require('../Storage/currencyStorage');

const router = express.Router();

router.post('/', (req, res) => {
  const { name, ticker } = req.body;

  const currency = {
    name,
    ticker
  };

  currencies.push(currency);

  res.status(201).json(currency);
});

router.get('/', (req, res) => {
  res.json(currencies);
});

router.get('/:ticker', (req, res) => {
  const currency = currencies.find(
    item => item.ticker === req.params.ticker
  );

  if (!currency) {
    return res.status(404).json({
      message: 'Currency not found'
    });
  }

  res.json(currency);
});

router.put('/:ticker', (req, res) => {
  const currency = currencies.find(
    item => item.ticker === req.params.ticker
  );

  if (!currency) {
    return res.status(404).json({
      message: 'Currency not found'
    });
  }

  currency.name = req.body.name;
  currency.ticker = req.body.ticker;

  res.json(currency);
});

router.delete('/:ticker', (req, res) => {
  const index = currencies.findIndex(
    item => item.ticker === req.params.ticker
  );

  if (index === -1) {
    return res.status(404).json({
      message: 'Currency not found'
    });
  }

  currencies.splice(index, 1);

  res.status(204).send();
});

module.exports = router;