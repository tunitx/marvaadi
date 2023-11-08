
const express = require('express');
const router = express.Router();
const Member = require('../models/marvaadiMemberSchema');

router.get('/getMemberDetails', async (req, res) => {
  try {
    const members = await Member.find();
    res.send(members);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
