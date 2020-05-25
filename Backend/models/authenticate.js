const validator = require("validator");
const isEmpty = require("is-empty");

const authentication = function validateRegisterInput(data) {
  let errors = {};

  if (isEmpty(data.email)) {
    data.email = "";
  }

  if (isEmpty(data.password)) {
    data.password = "";
  }

  if (validator.isEmpty(data.email)) {
    errors.email = "This is a required field";
  }
  // } else if (validator.isEmail(data.email)) {
  //   errors.email = "This email is invalid";
  // }

  if (validator.isEmpty(data.password)) {
    errors.password = "This is a required field";
  }

  return {
    errors,
    validated: isEmpty(errors),
  };
};

module.exports = authentication;
