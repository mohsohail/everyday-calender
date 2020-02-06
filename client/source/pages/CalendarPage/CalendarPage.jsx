import React from 'react';
import { connect } from 'react-redux';
import { getCalendarAction, handleDateSelectAction } from '../../actions/calendar.actions';
import Calendar from '../../components/Calendar/Calendar';

class CalendarPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCalendarAction();
  }

  handleDateSelect = (monthOf, date, status) => {
    const { _id } = this.props.calendarData.data;
    const payload = {
      _id,
      monthOf,
      date,
      status
    };
    this.props.handleDateSelectAction(payload);
  };

  render() {
    const { calendarData } = this.props;
    return (
      <React.Fragment>
        {calendarData.status === 1 && <div>loading...</div>}
        {calendarData.status === 2 && (
          <Calendar
            calendarData={this.props.calendarData}
            handleDateSelect={this.handleDateSelect}
          />
        )}
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    calendarData: state.calendar.calendarData
  };
};

export default connect(mapStateToProps, { getCalendarAction, handleDateSelectAction })(
  CalendarPage
);
