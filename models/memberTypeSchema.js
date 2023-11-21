const { Schema, model } = require("mongoose");

const memberTypeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
});

module.exports = model("MemberType", memberTypeSchema);
