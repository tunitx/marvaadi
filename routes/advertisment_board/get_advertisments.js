const express = require("express");
const router = express.Router();
// const Member = require("../../models/marvaadiMemberSchema");
const Advertisment = require("../../models/advertismentSchema");

router.get("/advertisment/all", async (req, res) => {
  try {
    const advertisments = await Advertisment.find();

    // console.log(advertisments);

    res.status(200).json(advertisments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
