import React from 'react';
import Date from '../Date/Date';
import { getMonths as allMonths } from '../../constants/global.constants';
import { getDaysInMonth } from '../../utils/date.utils';
import { initIndexedDB, getAll } from '../../utils/indexedDb.utils';

import './Calendar.scss';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: 2020,
      day: 1,
      months: allMonths,
      collection: [],
      dataPayload: []
    };
  }

  foo = data => {
    this.setState({
      dataPayload: data
    });
  };
  getMonthData = () => {
    getAll(this.foo);
  };

  componentDidMount() {
    const that = this;
    const { year, day, months } = this.state;
    for (let i = 0; i < months.length; i++) {
      this.getDaysFromMonths(year, i, day);
    }

    setTimeout(that.getMonthData, 2000);
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
    const { dataPayload } = this.state;
    return (
      <div className="component-container">
        {dataPayload.length > 0 && (
          <div>
            <div className="calendar-container">
              {dataPayload.map(item => {
                return (
                  <div key={item.monthOf} className="months-dates-container">
                    <div className="months">
                      <p className="month">{item.monthOf}</p>
                    </div>
                    {item.days.map(day => {
                      return <Date key={day.day} day={day} />;
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Calendar;
