import axios from 'axios';

const endPoint = axios.create({
  baseURL: 'https://jobify-prod.herokuapp.com/api/v1/toolkit',
});

export default endPoint;
