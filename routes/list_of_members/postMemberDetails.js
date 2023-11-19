const express = require("express");
const router = express.Router();
const Member = require("../../models/marvaadiMemberSchema");
const db = require("../../utils/db");

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

    const member = new Member({
      name,
      profession,
      nativePlace,
      email,
      address,
      phoneNumber,
      memberType,
      pfp: req.file.location,
    });
    await member.save();
    res.status(201).send(member);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
