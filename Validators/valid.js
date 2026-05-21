const ValidationError = require("../Errors/validError");

function validateSchedulerParams (name, interval, task) {
  if (typeof name !== 'string' || !name.trim()) {
    throw new ValidationError('Name must be a string and not empty');
  }

  if (typeof interval !== 'number' || interval <= 0) {
    throw new ValidationError('Interval must be a number');
  }

  if (typeof task !== 'function') {
    throw new ValidationError('Task must be a function');
  }
};

module.exports = validateSchedulerParams;