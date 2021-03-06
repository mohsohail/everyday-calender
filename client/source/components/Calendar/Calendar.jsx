import React from 'react';
import Date from '../Date/Date';
import './Calendar.scss';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfMonthsAndItsDay: []
    };
  }
  handleDateSelect = (monthOf, date) => {
    this.props.handleDateSelect(monthOf, date);
  };
  render() {
    const { listOfMonthsData } = this.props.calendarData.data;
    return (
      <div className="component-container">
        <div className="calendar-container">
          {listOfMonthsData.map(item => {
            return (
              <div key={item.monthOf} className="months-dates-container">
                <div className="months">
                  <p className="month">{item.monthOf}</p>
                </div>
                {item.days.map(day => {
                  return (
                    <Date
                      key={day.date}
                      day={day}
                      monthOf={item.monthOf}
                      handleDateSelect={this.handleDateSelect}
                    />
                  );
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
