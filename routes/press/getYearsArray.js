const express = require("express");
const router = express.Router();

const Press = require("../../models/pressSchema");

router.get("/press/yearsList", async (req, res, next) => {
  try {
    const data = await Press.find({}, { year: 1, _id: 0 })
      .distinct("year")
      .sort({ year: -1 })
      .exec();

    console.log(data);

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
