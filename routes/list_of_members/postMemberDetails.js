const express = require("express");
const router = express.Router();
const Member = require("../../models/marvaadiMemberSchema");
const db = require("../../utils/db");

const MemberType = require("../../models/memberTypeSchema");

const uploadS3 = require("../../utils/awsConfig");

router.post("/postMemberDetails", uploadS3.single("pfp"), async (req, res) => {
  try {
    const {
      name,
      profession,
      nativePlace,
      email,
      address,
      phoneNumber,
      memberType,
    } = req.body;

    // console.log(memberType);

    const memberTypeObject = await MemberType.findOne({ id: memberType });
    // console.log(memberTypeObject);

    const member = new Member({
      name,
      profession,
      nativePlace,
      email,
      address,
      phoneNumber,
      memberType: memberTypeObject,
      pfp: req.file.location,
    });
    // console.log(member);
    await member.save();
    res.status(201).send(member);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
