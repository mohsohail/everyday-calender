import React from 'react';
import Date from '../Date/Date';
import { getMonths } from '../../constants/global.constants';
import { getDaysInMonth } from '../../utils/date.utils';

import './Calendar.scss';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      months: getMonths,
      year: 2020,
      day: 1
    };
  }
  componentDidMount() {
    // this.getDaysFromMonths();
  }
  getDaysFromMonths(year, month, day) {
    return getDaysInMonth(year, month, day);
  }
  render() {
    const { months, year, day } = this.state;
    return (
      <div className="component-container">
        <div className="calendar-container">
          {months.map((month, monthIndex) => {
            return (
              <div key={month} className="months-dates-container">
                <div className="months">
                  <p className="month">{month}</p>
                </div>
                <Date
                  {...this.state}
                  monthIndex={monthIndex}
                  getDaysFromMonths={this.getDaysFromMonths}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Calendar;
