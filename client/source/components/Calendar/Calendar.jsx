import React from 'react';
import Date from '../Date/Date';
import { getMonths as allMonths } from '../../constants/global.constants';
import { getDaysInMonth } from '../../utils/date.utils';
import { initIndexedDB } from '../../utils/indexedDb.utils';

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

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.collection.length !== this.state.collection.length &&
      this.state.collection.length === 12
    ) {
      initIndexedDB(this.state.collection);
    }
  }

  getDaysFromMonths = (year, month, day) => {
    const response = getDaysInMonth(year, month, day);
    this.setState(state => {
      const collection = state.collection.concat(response);
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
                {item.days.map(day => {
                  return <Date key={day} day={day} />;
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Calendar;
