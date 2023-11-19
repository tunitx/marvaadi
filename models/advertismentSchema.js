const { Schema, model } = require("mongoose");

const advertismentSchema = new Schema({
  businessImage: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  twitter: {
    type: String,
  },
  facebook: {
    type: String,
  },
  playStore: {
    type: String,
  },
  instagram: {
    type: String,
  },
  phone: {
    type: Number,
  },
  whatsapp: {
    type: Number,
  },
  email: {
    type: String,
  },
  youtube: {
    type: String,
  },
  website: {
    type: String,
  },
});

module.exports = model("Advertisment", advertismentSchema);
