const bcrypt = require("bcryptjs");
const User = require("../../models/user");

const postRegister = async (req, res) => {
  try {
    const { username, mail, password } = req.body;

    //check if exists
    const userExists = await User.exists({ mail });
    if (userExists) {
      return res.status(409).send("E-mail already in use.");
    }

    //encrypt password
    const encryptedPassword = await bcrypt.hash(password, 10);

    //create user document and save it in the database
    const user = await User.create({
      username,
      mail: mail.toLowerCase(),
      password: encryptedPassword,
    });
  } catch (error) {
    return res.status(500).send("Error occured. Please try again");
  }
};

module.exports = postRegister;
