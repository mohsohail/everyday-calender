import { CALENDAR_INIT, CALENDAR_SUCCESS, CALENDAR_FAILURE } from '../constants/actions';

const initialState = {
  calendarData: {
    status: 0,
    message: '',
    data: {}
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CALENDAR_INIT:
      return {
        ...state,
        calendarData: {
          status: 1,
          message: 'calendar init'
        }
      };
    case CALENDAR_SUCCESS:
      return {
        ...state,
        calendarData: {
          status: 2,
          message: 'calendar success',
          data: action.payload
        }
      };
    case CALENDAR_FAILURE:
      return {
        ...state,
        calendarData: {
          status: 3,
          message: 'calendar faliure',
          data: action.payload
        }
      };
    default:
      return state;
  }
}
