const log = require('./logger');

// Можно в будущем будет возвращать возвращать индентификатор таймера
// Это позволило бы остановить задачу с помощью clearInterval()

function programCheckStatus(name, interval, task){
    if (typeof name !== 'string' || name.trim() === '') {
        throw new Error("Error: name must be a string and not empty");
    }
    if (typeof interval !== 'number' || interval <= 0 ) {
        throw new Error("Error: interval must be a number");
    }
        if (typeof task !== 'function') {
        throw new Error("Error: task must be a function");
    }
    log(`Task ${name} has been started`);
    setInterval(() => {
        task()},
        interval);
}

function runningStatus(){
    log("running");
}

log("App is launched"); //Синхронный запуск

try{
    programCheckStatus("running", 10000, runningStatus);
}
catch(error){
    console.log("Error: an error occurred, type - %s", error);
}