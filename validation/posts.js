const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validatePostInput(data) {
  let errors = {};

  data.caption = validText(data.caption) ? data.caption : '';
  data.imageUrl = validText(data.imageUrl) ? data.imageUrl : '';

  if (Validator.isEmpty(data.imageUrl)) {
    errors.text = 'Image Url is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};