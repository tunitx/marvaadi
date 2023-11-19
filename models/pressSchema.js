const { Schema, model } = require("mongoose");

const pressSchema = new Schema({
  year: {
    type: Number,
    required: true,
  },

  month: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
});

module.exports = model("Press", pressSchema);
