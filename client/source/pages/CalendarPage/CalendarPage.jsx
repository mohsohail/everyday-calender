import React from 'react';
import { connect } from 'react-redux';
import { getCalendar } from '../../actions/calendar.actions';
import Calendar from '../../components/Calendar/Calendar';

class CalendarPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCalendar();
  }

  render() {
    const { calendarData } = this.props;
    return (
      <React.Fragment>
        {calendarData.status === 1 && <div>loading...</div>}
        {calendarData.status === 2 && <Calendar calendarData={this.props.calendarData} />}
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    calendarData: state.calendar.calendarData
  };
};

export default connect(mapStateToProps, { getCalendar })(CalendarPage);
