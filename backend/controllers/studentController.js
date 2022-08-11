const asyncHandler = require('express-async-handler')
const Student = require('../models/studentModel');
const generateToken = require('../utils/generateToken');

const registerStudent = async (req, res) => {
    const { firstName, lastName, email, password, dateOfBirth, status, accountType , mobile} = req.body;
    
  // check if the user already exist in the database
    const studentExists = await Student.findOne({ email });
    if (studentExists) {
        res.status(400);
        throw new Error("Student Already Exists");
  }
    
    //if the user doesn't exist save data in database

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
          isAdmin:student.isAdmin,
          firstName: student.firstName,
          email: student.email,
          lastName: student.lastName,
          password: student.password,
          dateOfBirth: student,dateOfBirth,
          status: student.status,
          accountType: student.accountType,
          mobile : student.mobile,
          token:generateToken(student._id)
        })
    }

    else {
        res.status(400)
        throw new Error('Error Occured');
    }

};

module.exports = {registerStudent}