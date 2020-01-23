import React from 'react';
import Calendar from '../../components/Calendar/Calendar';
import calendarConstants from '../../constants/calendar.constants';
import { getListOfMonthAndItsDays } from '../../utils/date.utils';
import { initIndexedDB } from '../../utils/indexedDb.utils';

class CalendarPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: calendarConstants.day,
      months: calendarConstants.months,
      year: calendarConstants.year,
      collectionOfMonths: []
    };
  }

  componentDidMount() {
    const { day, months, year } = this.state;

    const listOfMonthAndItsDays = getListOfMonthAndItsDays(day, months, year);

    // for (let month = 0; month < months.length; month++) {
    //   const individualMonth = getDaysInMonth(year, month, day);
    //   this.setState(state => {
    //     const collectionOfMonths = state.collectionOfMonths.concat(individualMonth);
    //     return {
    //       collectionOfMonths
    //     };
    //   });
    // }
  }

  componentDidUpdate() {
    const { collectionOfMonths } = this.state;
    if (collectionOfMonths.length === 12) {
      // initIndexedDB();
      console.log('12');
    }
  }

  render() {
    return <Calendar />;
  }
}

export default CalendarPage;
