import React from 'react';

import '../../../style.scss';
import './Date.scss';

class Date extends React.Component {
  handleClick = e => {
    const { day, monthOf } = this.props;
    this.props.handleDateSelect(monthOf, day.date, !day.status);
  };

  render() {
    const { day } = this.props;
    return (
      <div className="dates">
        <p
          key={day.date}
          className={day.status ? 'date completed' : 'date not-completed'}
          onClick={this.handleClick}
        >
          {day.date}
        </p>
      </div>
    );
  }
}
export default Date;
