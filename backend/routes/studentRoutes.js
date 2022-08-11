const express = require("express");
const { registerStudent } = require("../controllers/studentController");


const router = express.Router()

router.route('/register').post(registerStudent);

module.exports = router;