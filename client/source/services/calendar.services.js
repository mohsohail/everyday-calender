import { GET_CALENDAR } from '../constants/endpoints.constants';
import { callAPI } from '../utils/api.utils';

export const processGetCalendar = async () => {
  const request = {
    url: `http://localhost:8000/${GET_CALENDAR}`,
    method: 'get'
  };
  const response = await callAPI(request);
  if (!response.error) {
    return response.data[0];
  } else {
    return { error: true, message: response.message };
  }
};
