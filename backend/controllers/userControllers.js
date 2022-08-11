const registerUser = async (req, res) => {
    const { firstName, lastName, email, password, dateOfBirth, status, accountType } = req.body;
    res.json({
      firstName,
      email,
      lastName,
      password,
      dateOfBirth,
      status,
      accountType,
    });

};

module.exports = {registerUser}