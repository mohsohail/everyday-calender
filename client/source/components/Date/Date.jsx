import React from 'react';

import './Date.scss';

const Date = ({ year, day, monthIndex, getDaysFromMonths }) => {
  return (
    <div className="dates">
      {getDaysFromMonths(year, monthIndex, day).map((day, dayIndex) => {
        return (
          <p key={dayIndex} className="date">
            {day}
          </p>
        );
      })}
    </div>
  );
};
export default Date;
