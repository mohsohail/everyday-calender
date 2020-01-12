import React from 'react';

import '../../../style.scss';
import './Date.scss';

const handleClick = e => {
  e.target.classList.toggle('highlight');
};
const Date = ({ day }) => {
  return (
    <div className="dates">
      <p key={day} className="date" onClick={handleClick}>
        {day}
      </p>
    </div>
  );
};
export default Date;
