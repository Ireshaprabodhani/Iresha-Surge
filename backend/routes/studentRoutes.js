const express = require("express");
const { registerStudent , authStudent } = require("../controllers/studentController");



const router = express.Router()

router.route('/register').post(registerStudent);
router.route("/login").post(authStudent);// route() is an api end point

module.exports = router;