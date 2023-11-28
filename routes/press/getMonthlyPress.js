const express = require("express");
const router = express.Router();

const Press = require("../../models/pressSchema");

router.get("/press/months/:year/:month", async (req, res, next) => {
  try {
    const { year, month } = req.params;
    const data = await Press.find({ year: year, month: month });

    // console.log(data);

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
