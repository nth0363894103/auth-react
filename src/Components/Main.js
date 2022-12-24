import { message, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Backdrop from './Others/Backdrop';
import { CheckUser } from '@redux/Actions/Auth';
import { useLocalStorage } from '@hook';
import ProtectRoute from '../Utils/ProtectRoute';
import routeList from '@/Utils/routemap';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Components/Layout';
const Main = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);
  const [token] = useLocalStorage('token', null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLoggedIn) setLoading(false);
    else {
      dispatch(CheckUser(token))
        .then((res) => {
          message.success(res?.data?.message?.uid);
          setLoading(false);
        })
        .catch((err) => {
          message.error(err);
          setLoading(false);
        });
    }
  }, []);
  return (
    <>
      {loading ? (
        <Backdrop />
      ) : (
        <ProtectRoute>
          <Layout />
        </ProtectRoute>
      )}
    </>
  );
};
export default Main;
