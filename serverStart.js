require('./appWork');
require('dotenv').config();
const log = require('./Logger/logger');
const app = require('./appStart');
const updatePricesTask = require('./Tasks/updatePricesTask');

const PORT = 3000;

updatePricesTask();

const interval = setInterval(updatePricesTask, 60000);

app.listen(PORT, () => {
  log.info("Server started on port ${PORT}");
});

process.on('SIGINT', () => {
  clearInterval(interval);

  log.info("Server stopped");

  process.exit(0);
});