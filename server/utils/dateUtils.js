const calendarConstants = require('../constants/calendarConstants');

const getDaysInMonth2 = (day, month, year) => {
  const date = new Date(Date.UTC(year, month, day));
  const days = [];
  while (date.getMonth() === month) {
    days.push({
      date: new Date(date).getDate(),
      status: false
    });
    date.setDate(date.getDate() + 1);
  }
  return {
    monthOf: calendarConstants.months[month],
    days: days
  };
};

const getListOfMonthAndItsDays = (day, months, year) => {
  let listOfMonthAndItsDays = [];
  for (let month = 0; month < months.length; month++) {
    let individualMonthData = getDaysInMonth2(day, month, year);
    listOfMonthAndItsDays.push(individualMonthData);
  }
  return listOfMonthAndItsDays;
};

const getMonthNumber = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  oct: 9,
  nov: 10,
  dec: 11
};

const getDateNumber = date => {
  return date - 1;
};

module.exports = {
  getDaysInMonth2,
  getListOfMonthAndItsDays,
  getMonthNumber,
  getDateNumber
};
