const express = require("express");
const { newUser, loginCheck } = require("../controllers/userControllers");

const router = express.Router();

router.route("/").post(newUser);
router.route("/login").post(loginCheck);

module.exports = router;
