const express = require("express");
const router = express.Router();
const Member = require("../models/marvaadiMemberSchema");
const db = require('../utils/db');

router.post("/postMemberDetails", async (req, res) => {
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
    });
    await member.save();
    res.status(201).send(member);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
