import React from 'react';
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
    const foo = getDaysInMonth(year, month, day);
    console.log(foo);
    return foo;
  }
  render() {
    const { months, year, day } = this.state;
    return (
      <div className="component-container">
        <div className="calendar-container">
          {months.map((month, index) => {
            return (
              <div key={month} className="months-dates-container">
                <div className="months">
                  <p className="month">{month}</p>
                </div>
                <div className="dates">
                  {this.getDaysFromMonths(year, index, day).map((day, index) => {
                    return (
                      <p key={index} className="date">
                        {day}
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Calendar;
