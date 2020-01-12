import { getMonths as allMonths } from '../constants/global.constants';

function getDaysInMonth(year, month, day) {
  const date = new Date(Date.UTC(year, month, day));
  const days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date).getDate());
    date.setDate(date.getDate() + 1);
  }
  return {
    monthOf: allMonths[month],
    days: days
  };
}

export { getDaysInMonth };
