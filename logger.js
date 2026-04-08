const config = require('./config');

function log(messageText){
    console.log('%s: %s', config.appName, messageText);
}

module.exports = log;