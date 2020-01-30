const mongoose = require('../config/connection');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: false,
    default: () => new Date()
  },
  updatedAt: {
    type: Date,
    required: false,
    default: () => new Date()
  }
});

module.exports = mongoose.model('User', userSchema);
