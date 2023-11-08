
const mongoose = require('mongoose');

const marvaadiMemberSchema = new mongoose.Schema({
  memberType: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  profession: {
    type: String,
    required: true
  },
  nativePlace: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('MarvaadiMember', marvaadiMemberSchema);
