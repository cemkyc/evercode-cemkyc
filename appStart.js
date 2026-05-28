const express = require('express');
const authMiddleware = require('./Middleware/authMiddleware');
const currencyRoutes = require('./Routes/currencyRoutes');
const priceRoutes = require('./Routes/priceRoutes');

const app = express();

app.use(express.json());

app.use('/currencies', currencyRoutes);
app.use('/price', priceRoutes);

app.get('/status', (req, res) => {
  res.send('ok');
});

module.exports = app;