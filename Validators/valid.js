function validateSchedulerParams (name, interval, task) {
  if (typeof name !== 'string' || !name.trim()) {
    throw new Error('Name must be a string and not empty');
  }

  if (typeof interval !== 'number' || interval <= 0) {
    throw new Error('Interval must be a number');
  }

  if (typeof task !== 'function') {
    throw new Error('Task must be a function');
  }
};

module.exports = validateSchedulerParams;