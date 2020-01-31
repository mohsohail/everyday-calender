const calendarModel = require('../models/Calendar.model');

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

const getCalendar = async ({ userId }) => {
  try {
    return await calendarModel.findById(userId);
  } catch (e) {
    throw e;
  }
};

const updateCalendar = async ({ userId }) => {
  try {
    return await calendarModel.update(
      { _id: userId },
      {
        $set: {}
      }
    );
  } catch (e) {
    throw e;
  }
};

const deleteCalendar = async ({ userId }) => {
  try {
    return await calendarModel.remove({ _id: userId });
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
  getCalendar,
  updateCalendar,
  deleteCalendar,
  createCalendar
};
