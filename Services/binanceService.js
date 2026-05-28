const axios = require('axios');

async function getPrices() {
  const res = await axios.get(
    'https://api.binance.com/api/v3/ticker/price'
  );

  return res.data;
}

module.exports = { getPrices };