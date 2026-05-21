const AppError = require('./Errors/appError');
const log = require('./Logger/logger');
const scheduleTask = require('./Schedule/scheduler');
const runningTask = require('./Tasks/task');

try {
    log("App is launched");
    scheduleTask("running", 10000, runningTask);
}
catch (error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.statusCode);
    console.log(error.timestamp);
};