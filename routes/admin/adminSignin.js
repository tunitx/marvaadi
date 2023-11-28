const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const Admin = require("../../models/adminSchema");

router.post("/admin/signin", async (req, res) => {
  const { email, password } = req.body;
  const user = await Admin.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  if (password !== user?.password) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = jwt.sign({ email }, process.env.JWT_SECRET);

  res.status(200).json({ token });
});

module.exports = router;
