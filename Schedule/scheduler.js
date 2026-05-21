const log = require('../Logger/logger');
const validateSchedulerParams = require('../Validators/valid')

// Можно в будущем будет возвращать возвращать индентификатор таймера
// Это позволило бы остановить задачу с помощью clearInterval()

// function runningStatus(){
//     log("running");
// }

function scheduleTask(name, interval, task, reqId) {
    validateSchedulerParams(name, interval, task, reqId);

    log.info(`Task "${name}" started`);
    setInterval(task, interval);
}

module.exports = scheduleTask;