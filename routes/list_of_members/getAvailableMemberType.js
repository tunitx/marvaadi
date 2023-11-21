const express = require("express");
const router = express.Router();
const Member = require("../../models/marvaadiMemberSchema");

router.get("/member/typesList", async (req, res) => {
  try {
    const members = await Member.find({}, { memberType: 1, _id: 0 })
      .populate("memberType")
      // .distinct("memberType.id")
      .exec();

    const distinctMemberTypes = new Set(
      members.map((member) => JSON.stringify(member.memberType))
    );

    // Convert Set back to an array of objects
    const distinctMemberTypesArray = Array.from(distinctMemberTypes).map(
      (type) => JSON.parse(type)
    );

    res.status(200).json(distinctMemberTypesArray);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
