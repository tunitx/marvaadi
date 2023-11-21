const express = require("express");
const router = express.Router();

const MemberType = require("../../models/memberTypeSchema");

router.get("/member/memberType/all", async (req, res, next) => {
  try {
    const memberTypeList = await MemberType.find({});

    console.log(memberTypeList);

    res.status(200).json(memberTypeList);
  } catch (e) {
    res.status(500).json({ errorMessage: e });
  }
});

module.exports = router;
