import { CALENDAR_INIT, CALENDAR_SUCCESS, CALENDAR_FAILURE } from '../constants/actions';
import { processGetCalendar } from '../services/calendar.services';

export const getCalendar = () => async dispatch => {
  dispatch({
    type: CALENDAR_INIT
  });

  const response = await processGetCalendar();
  if (!response.error) {
    dispatch({
      type: CALENDAR_SUCCESS,
      payload: response
    });
  } else {
    dispatch({
      type: CALENDAR_FAILURE,
      payload: response
    });
  }
};
