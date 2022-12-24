import axios from 'axios';
import { WEB_API, REQUEST_TIMEOUT } from './config';
const fetch = (url, data = {}, headers = {}) => {
  return axios({
    method: 'POST',
    url: WEB_API + url,
    timeout: REQUEST_TIMEOUT,
    data,
    headers,
    responseType: 'json'
  });
};
const handleResponseError = (error) => {
  if (error?.response?.data?.exception) {
    return 'BACKEND EXCEPTION: ' + error.response.data.exception;
  }
  if (error?.response?.data?.message) {
    return error.response.data.message;
  }

  if (error?.message) {
    return error.message;
  }
  return 'Some error occurred while processing your request.';
};
export { fetch, handleResponseError };
