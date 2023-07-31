import axios from 'axios';
import { getDataFromSession } from './session';

const endPoint = axios.create({
  baseURL: 'https://jobify-prod.herokuapp.com/api/v1/toolkit',
});

endPoint.interceptors.request.use(
  (setting) => {
    const data = getDataFromSession();
    if (data) {
      setting.headers['Authorization'] = `Bearer ${data?.token}`;
    }
    return setting;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default endPoint;
