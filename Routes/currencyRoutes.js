const express = require('express');
const currencyRepository = require('../Repository/currencyRepository');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, ticker } = req.body;

    const currency = await currencyRepository.create(
      name,
      ticker
    );

    res.status(201).json(currency);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

router.get('/', async (req, res) => {
  try {
    const currencies =
      await currencyRepository.findAll();

    res.json(currencies);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

router.get('/:ticker', async (req, res) => {
  try {
    const currency =
      await currencyRepository.findByTicker(
        req.params.ticker
      );

    if (!currency) {
      return res.status(404).json({
        message: 'Currency not found'
      });
    }

    res.json(currency);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

router.put('/:ticker', async (req, res) => {
  try {
    const { name, ticker } = req.body;

    const changes =
      await currencyRepository.update(
        req.params.ticker,
        name,
        ticker
      );

    if (!changes) {
      return res.status(404).json({
        message: 'Currency not found'
      });
    }

    res.json({
      name,
      ticker
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

router.delete('/:ticker', async (req, res) => {
  try {
    const changes =
      await currencyRepository.delete(
        req.params.ticker
      );

    if (!changes) {
      return res.status(404).json({
        message: 'Currency not found'
      });
    }

    res.status(204).send();

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router;