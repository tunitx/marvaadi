const express = require("express");
const router = express.Router();

const Advertisment = require("../../models/advertismentSchema");

const uploadS3 = require("../../utils/awsConfig");

const verifyToken = require("../../utils/auth/verifyToken");

router.post(
  "/advertisment/new",
  verifyToken,
  uploadS3.single("businessImage"),
  async (req, res, next) => {
    try {
      const {
        title,
        description,
        twitter,
        facebook,
        playStore,
        instagram,
        phone,
        whatsapp,
        email,
        youtube,
        website,
      } = req.body;

      const advertisment = new Advertisment({
        title,
        description,
        twitter,
        facebook,
        playStore,
        instagram,
        phone,
        whatsapp,
        businessImage: req.file.location,
        email,
        youtube,
        website,
      });

      //   res.status(200).json({ message: "okauy" });

      await advertisment.save();

      res.status(201).send(advertisment);
    } catch (e) {
      res.status(400).send(e);
    }
  }
);

module.exports = router;
