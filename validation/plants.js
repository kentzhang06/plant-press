const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validatePlantInput(data) {
  let errors = {};

  data.name = validText(data.name) ? data.name : "";
  data.type = validText(data.type) ? data.type : "";
  data.info = validText(data.info) ? data.info : "";
  data.species = validText(data.species) ? data.species : "";

  if (Validator.isEmpty(data.name)) {
    errors.text = "Name is required";
  }

  if (Validator.isEmpty(data.type)) {
    errors.text = "Type is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
