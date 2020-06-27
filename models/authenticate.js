const validator = require("validator");
const isEmpty = require("is-empty");

const authentication = function validateRegisterInput(data) {
  let errors = {};

  if (isEmpty(data.email)) {
    data.email1 = "";
  }

  if (isEmpty(data.password)) {
    data.password1 = "";
  }

  if (validator.isEmpty(data.email)) {
    errors.email1 = "This is a required field";
  }
  // } else if (validator.isEmail(data.email)) {
  //   errors.email = "This email is invalid";
  // }

  if (validator.isEmpty(data.password)) {
    errors.password1 = "This is a required field";
  }

  return {
    errors,
    validated: isEmpty(errors),
  };
};

module.exports = authentication;
