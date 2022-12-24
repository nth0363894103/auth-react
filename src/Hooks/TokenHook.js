import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToken as dispatchSetToken } from '@redux/Actions/Auth.js';
export const useToken = (defaultValue = localStorage.getItem('token')) => {
  const [t, setT] = useState(null);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    const value = token ?? defaultValue;
    dispatch(dispatchSetToken(value));
    setT(value);
  }, []);
  const setToken = (token) => {
    dispatch(dispatchSetToken(token));
    setT(token);
  };
  return { token: t, setToken };
};
