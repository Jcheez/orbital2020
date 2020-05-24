const validator = require("validator");
const isEmpty = require("is-empty");

const validation = function validateRegisterInput(data) {
  let errors = {};

  if (isEmpty(data.email)) {
    data.email = "";
  }

  if (isEmpty(data.password)) {
    data.password = "";
  }

  if (isEmpty(data.confirmPassword)) {
    data.confirmPassword = "";
  }

  if (validator.isEmpty(data.email)) {
    errors.email = "This field is required";
  } else if (validator.isEmail(data.email) === false) {
    errors.email = "Invalid email entered";
  }

  if (validator.isEmpty(data.password)) {
    errors.password = "This field is required";
  }

  if (validator.isEmpty(data.confirmPassword)) {
    errors.confirmPassword = "Please confirm your password";
  }

  if (validator.equals(data.password, data.confirmPassword) === false) {
    errors.confirmPassword = "Passwords do not match";
  }

  return {
    errors,
    validated: isEmpty(errors),
  };
};

module.exports = validation;
