const express = require("express");
const router = express.Router();
const User = require("../model/user.model");

router.post("/", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });

    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).send({ message: "Email already exists" });
    
    await user.save();
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
