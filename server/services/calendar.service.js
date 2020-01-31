const calendarRepo = require('../repositories/calendar.repository');
const calendarConstants = require('../constants/calendarConstants');
const dateUtil = require('../utils/dateUtils');
const createYear = async payload => {
  try {
    let yearData = await calendarRepo.createYear(payload);
    return {
      err: false,
      message: 'success',
      status: 200,
      data: yearData
    };
  } catch (err) {
    return {
      err: true,
      message: 'failed',
      status: 500
    };
  }
};

const getAllYear = async () => {
  try {
    let years = await calendarRepo.getAllYear();
    return {
      err: false,
      message: 'success',
      status: 200,
      data: years
    };
  } catch (err) {
    return {
      err: true,
      message: 'failed',
      status: 500
    };
  }
};

const getYear = async payload => {
  try {
    let year = await calendarRepo.getYear(payload);
    return {
      err: false,
      message: 'success',
      status: 200,
      data: year
    };
  } catch (err) {
    return {
      err: true,
      message: 'failed',
      status: 500
    };
  }
};

const updateYear = async payload => {
  try {
    let year = await calendarRepo.updateYear(payload);
    return {
      err: false,
      message: 'success',
      status: 200,
      data: year
    };
  } catch (err) {
    return {
      err: true,
      message: 'failed',
      status: 500
    };
  }
};

const deleteYear = async payload => {
  try {
    let year = await calendarRepo.deleteYear(payload);
    return {
      err: false,
      message: 'success',
      status: 200,
      data: year
    };
  } catch (err) {
    return {
      err: true,
      message: 'failed',
      status: 500
    };
  }
};

const createCalendar = async () => {
  try {
    const listOfMonthAndItsDays = dateUtil.getListOfMonthAndItsDays(
      calendarConstants.day,
      calendarConstants.months,
      calendarConstants.year
    );
    let createCalendarData = await calendarRepo.createCalendar(listOfMonthAndItsDays);
    return {
      err: false,
      message: 'success',
      status: 200,
      data: createCalendarData
    };
  } catch (err) {
    return {
      err: true,
      message: 'failed',
      status: 500
    };
  }
};

module.exports = {
  createYear,
  getAllYear,
  getYear,
  updateYear,
  deleteYear,
  createCalendar
};
