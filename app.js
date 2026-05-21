const log = require('./Logger/logger');
const scheduleTask = require('./Schedule/scheduler');
const runningTask = require('./Tasks/task');

log("App is launched");

scheduleTask("running", 10000, runningTask);