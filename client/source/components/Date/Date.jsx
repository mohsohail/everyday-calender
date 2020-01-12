import React from 'react';

import '../../../style.scss';
import './Date.scss';

const handleClick = e => {
  e.target.classList.toggle('highlight');
};
const Date = ({ days }) => {
  return (
    <div className="dates">
      {days.map(day => {
        return (
          <p key={day} className="date" onClick={handleClick}>
            {day}
          </p>
        );
      })}
    </div>
  );
};
export default Date;
