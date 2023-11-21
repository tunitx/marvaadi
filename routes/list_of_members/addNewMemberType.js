const express = require("express");
const router = express.Router();

const MemberType = require("../../models/memberTypeSchema");

router.post("/member/memberType/new", async (req, res) => {
  try {
    const { name, id } = req.body;
    const member = new MemberType({
      name,
      id,
    });

    await member.save();

    // console.log(member);

    res.status(201).json(member);
  } catch (e) {
    res.status(500).json({ errorMessage: e });
  }
});

module.exports = router;
