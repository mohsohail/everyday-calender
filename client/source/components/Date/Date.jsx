import React from 'react';

import '../../../style.scss';
import './Date.scss';

class Date extends React.Component {
  handleClick = e => {
    e.target.classList.toggle('highlight');
    const { day, monthOf } = this.props;
    this.props.handleDateSelect(monthOf, day.date);
  };

  render() {
    const { day } = this.props;
    return (
      <div className="dates">
        <p key={day.date} className="date" onClick={this.handleClick}>
          {day.date}
        </p>
      </div>
    );
  }
}
export default Date;
