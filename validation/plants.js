const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validatePlantInput(data) {
  let errors = {};

  data.plantName = validText(data.plantName) ? data.plantName : '';
  data.plantType = validText(data.plantType) ? data.plantType : '';
  data.plantBio = validText(data.plantBio) ? data.plantBio : '';
  data.plantSpecies = validText(data.plantSpecies) ? data.plantSpecies : '';


  // if (!Validator.isLength(data.text, { min: 5, max: 140 })) {
  //   errors.text = 'Tweet must be between 5 and 140 characters';
  // }

  // if (Validator.isEmpty(data.text)) {
  //   errors.text = 'Text field is required';
  // }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};