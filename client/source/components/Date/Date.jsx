import React from 'react';

import '../../../style.scss';
import './Date.scss';

const handleClick = e => {
  e.target.classList.toggle('highlight');
};
const Date = ({ day }) => {
  console.log('consoling day', day);
  return (
    <div className="dates">
      <p key={day.day} className="date" onClick={handleClick}>
        {day.day}
      </p>
    </div>
  );
};
export default Date;
