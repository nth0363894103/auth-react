import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setToken } from '@redux/Actions/Auth.js';
export const useLocalStorage = (keyName, defaultValue, cb = null) => {
  const dispatch = useDispatch();
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = localStorage.getItem(keyName);
      if (value) {
        return value;
      } else {
        localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });
  const setValue = (newValue) => {
    try {
      localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {}
    setStoredValue(newValue);
    if (cb) {
      cb(newValue);
    }
  };
  return [storedValue, setValue];
};
