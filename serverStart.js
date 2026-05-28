require('./appWork');
require('dotenv').config();
const log = require('./Logger/logger');
const app = require('./appStart');

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});