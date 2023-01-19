const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const { async } = require("rxjs");

const newUser = async (req, res) => {
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  console.log(salt);
  console.log(hashedPassword);
  const { name, email, mobile } = req.body;
  await User.create({ name, email, mobile, password: hashedPassword });
  res.json({ message: "new User added successfully" });
};
const loginCheck = async(req, res, next) => {
    try {
      const user = await User.findOne({ mobile: req.body.mobile });
      if (user == null)
        return res.status(400).json({ message: "cannot find user" });
      if (await bcrypt.compare(req.body.password, user.password)) {
        res.json({ message: "successfully signed in" });
      } else {
        res.json({ message: "not allowed" });
      }
    } catch (err) {
      res.status(403).json({ error: err });
    }
};

module.exports = {
  newUser,
  loginCheck,
};
