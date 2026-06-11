const repository = require('../Repository/currencyRepository');
const { getPrices } = require('../Services/binanceService');
const log = require('../Logger/logger');


async function updatePricesTask() {
  try {
    const currencies =await repository.findAll();

    const prices = await getPrices();

    for (const currency of currencies) {

      const pair = prices.find( item => item.symbol === `${currency.ticker}USDT`);

      if (pair) {
        await repository.updatePrice(currency.ticker, pair.price);
      }
    }

    log.info("Prices updated");
  }
  catch (err) {
    console.error(err);
  }
}

module.exports = updatePricesTask;