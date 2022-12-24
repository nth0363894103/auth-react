import { fetch, handleResponseError } from 'fetch';
import { SET_TOKEN, SET_USER_DATA, SET_IS_LOGGED_IN } from '../Const';
export const setToken = (payload) => {
  localStorage.setItem('token', payload);
  return {
    type: SET_TOKEN,
    payload
  };
};
export const setUserInfo = (payload) => {
  return {
    type: SET_USER_DATA,
    payload
  };
};
export const setLoggedIn = (payload = true) => {
  return {
    type: SET_IS_LOGGED_IN,
    payload
  };
};
export const CheckUser = (payload) => {
  return (dispatch) => {
    if (!payload || payload === 'null') {
      dispatch(setLoggedIn(false));
      return Promise.reject('Please login again!');
    }
    return fetch('user/get', null, {
      Authorization: payload
    })
      .then((res) => {
        dispatch(setToken(payload));
        dispatch(setUserInfo(res?.data?.message));
        dispatch(setLoggedIn());
        return Promise.resolve(res);
      })
      .catch((err) => {
        return Promise.resolve(handleResponseError(err));
      });
  };
};
export const login = (values) => {
  return (dispatch) => {
    return fetch('user/login', values)
      .then((res) => {
        dispatch(setToken(res?.data?.message?.token));
        dispatch(setUserInfo(res?.data?.message?.data));
        dispatch(setLoggedIn());
        return Promise.resolve(res);
      })
      .catch((err) => {
        return Promise.reject(handleResponseError(err));
      });
  };
};
