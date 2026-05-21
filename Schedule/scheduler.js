const log = require('../Logger/logger');
const validateSchedulerParams = require('../Validators/valid')

function scheduleTask(name, interval, task, reqId) {
    validateSchedulerParams(name, interval, task, reqId);

    log.info(`Task "${name}" started`);
    setInterval(task, interval);
}

module.exports = scheduleTask;