const express = require("express");
const router = express.Router();
const User = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).send({ message: "User dose not exists" });

    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword)
      return res.status(400).send({ message: "Password dose not match" });

    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
      "secret",
      {
        expiresIn: "1h",
      }
    );
    
    return res.status(200).send({ data:token, message: "Fetch Users Token" });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).send({ message: "Email already exists" });

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const user = new User({ name, email, password: hash });
    await user.save();

    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword)
      return res.status(400).send({ message: "Password dose not match" });

    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
      "secret",
      {
        expiresIn: "1h",
      }
    );
    
    return res.status(200).send({ data:token, message: "Fetch Users Token" });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
