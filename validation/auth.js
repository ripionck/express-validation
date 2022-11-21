const { check } = require("express-validator");

exports.userRegistrationValidator = [
  check("name")
    .trim()
    .notEmpty()
    .withMessage("User name missing")
    .isLength({ min: 5 })
    .withMessage("Name must be minimum 5 characters."),
  check("email")
    .trim()
    .notEmpty()
    .withMessage("Email is missing")
    .isEmail()
    .withMessage("Not a valid email"),
  check("password")
    .trim()
    .notEmpty()
    .withMessage("Password is missing")
    .isLength({ min: 5 })
    .withMessage("Password must be minimum 5 characters."),
];

exports.userLoginValidator = [
  check("email")
    .trim()
    .notEmpty()
    .withMessage("Email is missing")
    .isEmail()
    .withMessage("Not a valid email"),
  check("password")
    .trim()
    .notEmpty()
    .withMessage("Password is missing")
    .isLength({ min: 5 })
    .withMessage("Password must be minimum 5 characters."),
];
