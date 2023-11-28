const express = require("express");
const router = express.Router();
const Press = require("../../models/pressSchema");

const uploadS3 = require("../../utils/awsConfig");

const verifyToken = require("../../utils/auth/verifyToken");

// uploadS3.single() middleware if uploading our image to awsS3, and populating the request object with "file"
// key, in which info of that image is provided.

router.post(
  "/press/new",
  verifyToken,
  uploadS3.single("image"),
  async (req, res, next) => {
    try {
      const { date } = req.body;

      const monthsName = [
        "january",
        "february",
        "march",
        "april",
        "may",
        "june",
        "july",
        "august",
        "september",
        "october",
        "november",
        "december",
      ];

      const dateObject = new Date(date);

      const pressYear = dateObject.getFullYear();
      const pressMonth = dateObject.getMonth();

      const press = new Press({
        year: pressYear,
        month: monthsName[pressMonth],
        imageURL: req.file.location,
      });
      await press.save();

      res.status(201).json(press);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
);

module.exports = router;
