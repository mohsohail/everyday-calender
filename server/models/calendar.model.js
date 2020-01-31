const mongoose = require('../config/connection');
const Schema = mongoose.Schema;

const calendarSchema = new Schema({
  listOfMonthsData: {
    type: Schema.Types.Mixed,
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

module.exports = mongoose.model('Calendar', calendarSchema);
