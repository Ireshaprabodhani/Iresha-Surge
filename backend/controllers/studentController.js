const asyncHandler = require("express-async-handler");
const Student = require("../models/studentModel");
const generateToken = require("../utils/generateToken");

const registerStudent = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    dateOfBirth,
    status,
    accountType,
    mobile,
  } = req.body;

  // check if the user already exist in the database
  const studentExists = await Student.findOne({ email });
  if (studentExists) {
    res.status(400).json("Student Already Exists");
  } else {
    const student = await Student.create({
      firstName,
      email,
      lastName,
      password,
      dateOfBirth,
      status,
      accountType,
      mobile,
    });

    if (student) {
      res.status(201).json({
        _id: student._id,
        isAdmin: student.isAdmin,
        firstName: student.firstName,
        email: student.email,
        lastName: student.lastName,
        password: student.password,
        dateOfBirth: student.dateOfBirth,
        status: student.status,
        accountType: student.accountType,
        mobile: student.mobile,
        token: generateToken(student._id),
      });
    }
    //if the user doesn't exist save data in database
    else {
      res.status(400);
      throw new Error("Error Occured");
    }
  }
};

const authStudent = asyncHandler(async (req, res) => {
  //user login
  const { email, password } = req.body;

  const student = await Student.findOne({ email });

  if (student && (await student.matchPassword(password))) {
    res.json({
      _id: student._id,
      isAdmin: student.isAdmin,
      firstName: student.firstName,
      email: student.email,
      lastName: student.lastName,
      password: student.password,
      dateOfBirth: student.dateOfBirth,
      status: student.status,
      accountType: student.accountType,
      mobile: student.mobile,
      token: generateToken(student._id),
    });

    // if user does not found
  } else {
    res.status(400);
    throw new Error("Invalid Email or Password");
  }
});

module.exports = { registerStudent, authStudent };
