import React from 'react';
import Calendar from '../../components/Calendar/Calendar';

import { getmonthsAndDaysDataFromIDB } from '../../utils/indexedDb.utils';

class CalendarPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    getmonthsAndDaysDataFromIDB();
  }

  componentDidUpdate() {}

  render() {
    return <Calendar />;
  }
}

export default CalendarPage;
