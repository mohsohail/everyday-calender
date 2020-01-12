import React from 'react';

import '../../../style.scss';
import './Date.scss';

const handleClick = e => {
  e.target.style.color = '#ffcf40';
  e.target.style.borderColor = '#ffcf40';
};
const Date = ({ year, day, monthIndex, getDaysFromMonths }) => {
  return (
    <div className="dates">
      {getDaysFromMonths(year, monthIndex, day).map((day, dayIndex) => {
        return (
          <p key={dayIndex} className="date" onClick={handleClick}>
            {day}
          </p>
        );
      })}
    </div>
  );
};
export default Date;
