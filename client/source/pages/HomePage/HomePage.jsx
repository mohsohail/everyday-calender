import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../HomePage/views/Home';

import calendarConstants from '../../constants/calendar.constants';
import { getListOfMonthAndItsDays } from '../../utils/date.utils';
import { initIndexedDB } from '../../utils/indexedDb.utils';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: calendarConstants.day,
      months: calendarConstants.months,
      year: calendarConstants.year,
      listOfMonthAndItsDays: []
    };
  }
  componentDidMount() {
    const { day, months, year } = this.state;
    const listOfMonthAndItsDays = getListOfMonthAndItsDays(day, months, year);
    this.setState({
      listOfMonthAndItsDays
    });
  }
  componentDidUpdate() {
    const { listOfMonthAndItsDays } = this.state;
    if (listOfMonthAndItsDays.length === 12) {
      initIndexedDB(listOfMonthAndItsDays);
    }
  }

  render() {
    return (
      <div>
        <Home {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    foo: state.foo
  };
};

export default connect(mapStateToProps, {})(HomePage);
