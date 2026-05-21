const config = require('../Config/config');

const LEVELS = {
    error: 0,
    warn: 1,
    info: 2,
    debug: 3,
    trace: 4,
};

const currentLevel = 'trace'; // можно менять для фильтрации

function formatMessage(level, message, requestId) {
    const time = new Date().toISOString();
    let base = `[${time}] [${config.appName}] [${level.toUpperCase()}] ${message}`;

    if (requestId) {
        base += ` [requestId: ${requestId}]`;
    }
    return base;
}

function log(level, message, requestId) {
    if (LEVELS[level] > LEVELS[currentLevel]) return;
    const output = formatMessage(level, message, requestId);
    console.log(output);
}

module.exports = {
    error: (msg, reqId) => log('error', msg, reqId),
    warn: (msg, reqId) => log('warn', msg, reqId),
    info: (msg, reqId) => log('info', msg, reqId),
    debug: (msg, reqId) => log('debug', msg, reqId),
    trace: (msg, reqId) => log('trace', msg, reqId),
};