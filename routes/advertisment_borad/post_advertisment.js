const express = require("express");
const router = express.Router();

const Advertisment = require("../../models/advertismentSchema");

const uploadS3 = require("../../utils/awsConfig");

router.post(
  "/advertisment/new",
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

      console.log(advertisment);

      //   res.status(200).json({ message: "okauy" });

      //   await advertisment.save();

      res.status(200).send(advertisment);
    } catch (e) {
      res.status(400).send(error);
    }
  }
);

module.exports = router;
