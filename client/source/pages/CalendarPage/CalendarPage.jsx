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
    this.setState({
      collectionOfMonths: listOfMonthAndItsDays
    });
  }

  componentDidUpdate() {
    const { collectionOfMonths } = this.state;
    if (collectionOfMonths.length === 12) {
      console.log('12');
    }
  }

  render() {
    return <Calendar />;
  }
}

export default CalendarPage;
