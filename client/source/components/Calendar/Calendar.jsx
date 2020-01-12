import React from 'react';
import Date from '../Date/Date';
import { getMonths as allMonths } from '../../constants/global.constants';
import { getDaysInMonth } from '../../utils/date.utils';

import './Calendar.scss';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: 2020,
      day: 1,
      months: allMonths,
      //
      collection: []
    };
  }
  componentDidMount() {
    const { year, day, months } = this.state;
    for (let i = 0; i < months.length; i++) {
      this.getDaysFromMonths(year, i, day);
    }
  }

  getDaysFromMonths = (year, month, day) => {
    const res = getDaysInMonth(year, month, day);
    this.setState(state => {
      const collection = state.collection.concat(res);
      return {
        collection
      };
    });
  };
  render() {
    const { collection } = this.state;
    return (
      <div className="component-container">
        <div className="calendar-container">
          {collection.map(item => {
            return (
              <div key={item.monthOf} className="months-dates-container">
                <div className="months">
                  <p className="month">{item.monthOf}</p>
                </div>
                <Date days={item.days} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Calendar;
