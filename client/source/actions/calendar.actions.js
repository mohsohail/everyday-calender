import {
  CALENDAR_INIT,
  CALENDAR_SUCCESS,
  CALENDAR_FAILURE,
  DATE_SELECT_INIT,
  DATE_SELECT_SUCCESS,
  DATE_SELECT_FAILURE
} from '../constants/actions';
import { processGetCalendar, processDateSelect } from '../services/calendar.services';

export const getCalendarAction = () => async dispatch => {
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

export const handleDateSelectAction = params => async dispatch => {
  dispatch({
    type: CALENDAR_INIT
  });
  const response = await processDateSelect(params);
  if (!response.error) {
    dispatch({
      type: CALENDAR_SUCCESS,
      payload: response
    });
  } else {
    dispatch({
      type: CALENDAR_FAILURE
    });
  }
};
