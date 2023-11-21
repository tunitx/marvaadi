const express = require("express");
const router = express.Router();
const Member = require("../../models/marvaadiMemberSchema");

router.get("/member/typesList", async (req, res) => {
  try {
    const members = await Member.find({}, { memberType: 1, _id: 0 })
      .distinct("memberType")
      .sort()
      .exec();
    res.status(200).json(members);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
