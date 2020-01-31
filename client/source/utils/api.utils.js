import axios from 'axios';

const axiosInstance = axios.create({});

export const callAPI = request => {
  request.headers = request.headers || {};
  return axiosInstance.request(request).then((res, err) => {
    if (err) {
      console.log(err);
    } else {
      return res.data;
    }
  });
};
