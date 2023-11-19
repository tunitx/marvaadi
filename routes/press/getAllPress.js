const express = require("express");
const router = express.Router();

const Press = require("../../models/pressSchema");

router.get("/press/all", async (req, res, next) => {
  try {
    const data = await Press.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
