const AppError = require('./Errors/appError');
const log = require('./Logger/logger');
const scheduleTask = require('./Schedule/scheduler');
const runningTask = require('./Tasks/task');

const requestId = "CoolestTest";

try {
    log.info("App is launched", requestId);
    log.warn("Just testing warn level", requestId);

    scheduleTask("running", 10000, runningTask, requestId);
}
catch (error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.statusCode);
    console.log(error.timestamp);
};