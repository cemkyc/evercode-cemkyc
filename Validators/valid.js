const log = require('../Logger/logger');
const ValidationError = require("../Errors/validError");

function validateSchedulerParams(name, interval, task, reqId) {

  log.debug("Validating scheduler params", reqId);

  if (typeof name !== 'string' || !name.trim()) {
    log.error("Invalid name", reqId);
    throw new ValidationError('Name must be a string and not empty');
  }

  if (typeof interval !== 'number' || interval <= 0) {
    log.error("Invalid interval", reqId);
    throw new ValidationError('Interval must be a number');
  }

  if (typeof task !== 'function') {
    log.error("Invalid task", reqId);
    throw new ValidationError('Task must be a function');
  }

  if (typeof reqId !== 'string') {
    log.error("Invalid request ID", reqId);
    throw new ValidationError('ReqId must be a string');
  }

  log.info("Validation successful", reqId);
};

module.exports = validateSchedulerParams;