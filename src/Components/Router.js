import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  HashRouter,
  Routes,
  Route,
  BrowserRouter,
  Navigate,
  useRoutes,
  Link
} from 'react-router-dom';
import ProtectRoute from '../Utils/ProtectRoute';
import Login from './Auth/Login';
import Main from './Main';
function Router() {
  const routes = useRoutes([
    {
      path: '/login',
      exact: true,
      element: <Login />
    },
    {
      path: '/register',
      exact: true,
      element: <Login />
    },
    {
      path: '/*',
      element: <Main />
    }
  ]);
  return routes;
}
export default Router;
