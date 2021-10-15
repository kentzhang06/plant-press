const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateReminderInput(data) {
  let errors = {};

  data.reminderText = validText(data.reminderText) ? data.reminderText : '';

  if (Validator.isEmpty(data.reminderText)) {
    errors.text = 'Text for reminder is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};