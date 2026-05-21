const log = require('../Logger/logger');
const validateSchedulerParams = require('../Validators/valid')

// Можно в будущем будет возвращать возвращать индентификатор таймера
// Это позволило бы остановить задачу с помощью clearInterval()

// function runningStatus(){
//     log("running");
// }

function scheduleTask (name, interval, task){
    validateSchedulerParams (name, interval, task);

    log (`Task "${name}" started`);
    setInterval(task, interval);
};

module.exports = scheduleTask;