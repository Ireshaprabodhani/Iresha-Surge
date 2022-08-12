const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const studentSchema = mongoose.Schema(
  {
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
      firstName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    dateOfBirth:{
      type: Date,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
    accountType: {
      type: String,
      required: true,
    },

    mobile: {
      type: Number,
     
    },
  },
  {
    timestamps: true,
  }
);
//password descrypted
studentSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password); // compare the password from the database and the entered password
};
// previous saving opeation
studentSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  //after adding salt password is encrypted
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});


const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
