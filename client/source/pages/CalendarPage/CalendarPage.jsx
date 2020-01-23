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
      listOfMonthAndItsDays: []
    };
  }

  componentDidMount() {
    const { day, months, year } = this.state;

    const listOfMonthAndItsDays = getListOfMonthAndItsDays(day, months, year);
    this.setState({
      listOfMonthAndItsDays
    });
  }

  componentDidUpdate() {
    const { listOfMonthAndItsDays } = this.state;
    if (listOfMonthAndItsDays.length === 12) {
      initIndexedDB(listOfMonthAndItsDays);
    }
  }

  render() {
    return <Calendar />;
  }
}

export default CalendarPage;
