const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateReminderInput(data) {
  let errors = {};

  data.reminderType = validText(data.reminderType) ? data.reminderType : '';
  data.reminderText = validText(data.reminderText) ? data.reminderText : '';

  if (Validator.isEmpty(data.reminderText)) {
    errors.text = 'Text for reminder is required';
  }

  if (!Validator.isNumeric(data.frequency)) {
    errors.text = "Must input reminder frequency";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};