const calendarModel = require('../models/calendar.model');

const createYear = async payload => {
  try {
    const yearData = new calendarModel(payload);
    return await yearData.save();
  } catch (err) {
    throw err;
  }
};

const getAllYear = async () => {
  try {
    return await calendarModel.find({});
  } catch (e) {
    throw e;
  }
};

const getYear = async ({ calendarId }) => {
  try {
    return await calendarModel.findById(calendarId);
  } catch (e) {
    throw e;
  }
};

const updateYear = async payload => {
  const { _id, monthNumber, dateNumber, status } = payload;
  let updateObj = {
    [`listOfMonthsData.${monthNumber}.days.${dateNumber}.status`]: status
  };
  console.log(updateObj);
  try {
    return await calendarModel.findOneAndUpdate({ _id: _id }, { $set: updateObj }, { new: true });
  } catch (e) {
    throw e;
  }
};

const deleteCalendar = async ({ calendarId }) => {
  try {
    return await calendarModel.remove({ _id: calendarId });
  } catch (e) {
    throw e;
  }
};

const createCalendar = async payload => {
  try {
    const createCalendarData = new calendarModel({ listOfMonthsData: payload });
    return await createCalendarData.save();
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createYear,
  getAllYear,
  getYear,
  updateYear,
  deleteCalendar,
  createCalendar
};
