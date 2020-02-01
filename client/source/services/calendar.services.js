import { GET_CALENDAR, DATE_SELECT } from '../constants/endpoints.constants';
import { callAPI } from '../utils/api.utils';

export const processGetCalendar = async () => {
  const request = {
    url: `http://localhost:8000/${GET_CALENDAR}`,
    method: 'get'
  };
  const response = await callAPI(request);
  if (!response.err) {
    return response.data[0];
  } else {
    return { error: true, message: response.message };
  }
};

export const processDateSelect = async params => {
  const { _id, monthOf, days } = params;
  const request = {
    url: `http://localhost:8000/` + DATE_SELECT(_id),
    method: 'patch',
    data: {
      monthOf,
      days
    }
  };
  const response = await callAPI(request);
  if (!response.err) {
    return response.data[0];
  } else {
    return { error: true, message: response.message };
  }
};
