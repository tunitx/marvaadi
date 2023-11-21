const mongoose = require("mongoose");

const marvaadiMemberSchema = new mongoose.Schema({
  pfp: {
    type: String,
    required: true,
  },
  memberType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MemberType",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  profession: {
    type: String,
    required: true,
  },
  nativePlace: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("MarvaadiMember", marvaadiMemberSchema);
