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
      collectionOfMonths: [],
      dataPayload: []
    };
  }

  // foo = data => {
  //   this.setState({
  //     dataPayload: data
  //   });
  // };
  // getMonthData = () => {
  //   getAll(this.foo);
  // };

  // componentDidMount() {
  //   const { year, day, months } = this.state;
  //   for (let month = 0; month < months.length; month++) {
  //     // this.getDaysFromMonths(year, i, day);

  //     const individualMonth = getDaysInMonth(year, month, day);
  //     this.setState(state => {
  //       const collectionOfMonths = state.collectionOfMonths.concat(individualMonth);
  //       return {
  //         collectionOfMonths
  //       };
  //     });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (
  //     prevState.collectionOfMonths.length !== this.state.collectionOfMonths.length &&
  //     this.state.collectionOfMonths.length === 12
  //   ) {
  //     initIndexedDB(this.state.collectionOfMonths);
  //   }
  // }

  // render() {
  //   const { dataPayload } = this.state;
  //   return (
  //     <div className="component-container">
  //       {dataPayload.length > 0 && (
  //         <div>
  //           <div className="calendar-container">
  //             {dataPayload.map(item => {
  //               return (
  //                 <div key={item.monthOf} className="months-dates-container">
  //                   <div className="months">
  //                     <p className="month">{item.monthOf}</p>
  //                   </div>
  //                   {item.days.map(day => {
  //                     return <Date key={day.day} day={day} />;
  //                   })}
  //                 </div>
  //               );
  //             })}
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //   );
  // }
  render() {
    return <div>hello world</div>;
  }
}

export default Calendar;
