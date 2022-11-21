const express = require("express");
const {
  userRegistration,
  userLogin,
} = require("../controllers/users.controller");
const {
  userRegistrationValidator,
  userLoginValidator,
} = require("../validation/auth");
const { runValidation } = require("../validation/validation");
const router = express.Router();

router.post(
  "/register",
  userRegistrationValidator,
  runValidation,
  userRegistration
);
router.post("/login", userLoginValidator, runValidation, userLogin);

module.exports = router;
