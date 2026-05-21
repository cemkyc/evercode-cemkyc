const validateSchedulerParams = require('../Validators/valid');

test('throws error if name is empty', () => {
    expect(() => {
        validateSchedulerParams('', 1000, () => { });
    }).toThrow('Name must be a string and not empty');
});

test('throws error if interval is invalid', () => {
  expect(() => {
    validateSchedulerParams('test', 0, () => {});
  }).toThrow('Interval must be a number');
});

test('throws error if task is not function', () => {
  expect(() => {
    validateSchedulerParams('test', 1000, 'not-function');
  }).toThrow('Task must be a function');
});